import { useEffect, useState } from "react";
import "./Api.css";
import { Table } from "./Table";
import InputForm from "./InputForm";
import {
  createProduct,
  getProducts,
  removeProduct,
  updateProduct,
} from "./services";

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

  function formInvalid() {
    const invalid =
      !product.name ||
      !product.price ||
      !product.stock ||
      !product.description ||
      !product.img;
    return invalid;
  }

  async function update(id, product) {
    const updatedProduct = await updateProduct(id, product);
    const productsCopy = [...products];
    const index = productsCopy.findIndex((p) => p.id === updatedProduct.id);
    productsCopy.splice(index, 1, updatedProduct);
    setProducts(productsCopy);
    setProduct({ name: "", price: "", stock: "", description: "", img: "" });
  }

  async function remove(id) {
    const deleteProduct = await removeProduct(id);
    const productsCopy = [...products];
    const index = productsCopy.findIndex((p) => p.id === deleteProduct.id);
    productsCopy.splice(index, 1);
    setProducts(productsCopy);
  }

  async function onsubmit(e) {
    e.preventDefault();
    const createdProduct = await createProduct(product);
    const productsCopy = [...products];
    productsCopy.push(createdProduct);
    setProduct(productsCopy);
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

        <InputForm
          onsubmit={onsubmit}
          product={product}
          onchange={onchange}
          invalid={formInvalid()}
        />

        <Table
          products={products}
          update={update}
          remove={remove}
          invalid={formInvalid()}
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
