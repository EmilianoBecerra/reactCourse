import { useEffect, useState } from "react";
import "./Api.css";
import { Table } from "./Table";
import axios from "axios";
import Input from "./Input";

const URL_API_PRODUCTS =
  "https://650af169dfd73d1fab093f01.mockapi.io/api/products/";

export default function Api(props) {
  const { title } = props;
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([
    { name: "", price: "", stock: "", description: "", img: "" },
  ]);

  useEffect(() => {
    async function start() {
      const products = await getProducts();
      setProducts(products);
    }
    start();
  }, []);

  async function getProducts() {
    try {
      const { data: products } = await axios.get(URL_API_PRODUCTS);
      return products;
    } catch (err) {
      console.log("Error axios get", err.message);
    }
  }

  async function createProduct(product) {
    try {
      const { data: newProduct } = await axios.post(URL_API_PRODUCTS, product);
      return newProduct;
    } catch (err) {
      console.log("Axios post Err", err.message);
    }
  }

  async function updateProduct(id, product) {
    try {
      const { data: updatedProduct } = await axios.put(
        URL_API_PRODUCTS + id,
        product,
      );
      return updatedProduct;
    } catch (err) {
      console.log("Axios put Err", err.message);
    }
  }

  async function removeProduct(id) {
    try {
      const { data: removedProduct } = await axios.delete(
        URL_API_PRODUCTS + id,
      );
      return removedProduct;
    } catch (err) {
      console.log("Axios delete Err", err.message);
    }
  }

  async function update(id, product) {
    const updatedProduct = await updateProduct(id, product);
    const productsCopy = [...products];
    const index = productsCopy.find((p) => p.id === updatedProduct.id);
    productsCopy.splice(index, 1, updatedProduct);
    setProduct(productsCopy);
  }

  async function remove(id) {
    const deleteProduct = await removeProduct(id);
    const productsCopy = [...products];
    const index = productsCopy.findIndex((p) => p.id === deleteProduct.id);
    productsCopy.splice(index, 1);
    setProducts(productsCopy);
  }

  function onsubmit(e) {
    e.preventDefault();
    setProduct({ name: "", price: "", stock: "", description: "", img: "" });
  }

  function onchange(e) {
    const { value, id } = e.target;
    setProduct({ ...product, [id]: value });
  }

  return (
    <div className="Api">
      <div className="jumbotron">
        <h3>
          <u> Componente {title} </u>
        </h3>
        <hr />

        <Input onsubmit={onsubmit} product={product} onchange={onchange} />

        <Table
          products={products}
          update={(id) => update(id)}
          remove={(id) => remove(id)}
        />
      </div>
    </div>
  );
}

/*  
        //Sintaxis then/catch

        axios.get(URL_API_PRODUCTS)
        .then( response => {
            const data = response.data;
            setProducts(data);
        })
        .catch(err => console.log(err)) 
        */
