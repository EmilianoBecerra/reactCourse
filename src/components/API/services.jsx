import axios from "axios";

const URL_API_PRODUCTS =
  "https://650af169dfd73d1fab093f01.mockapi.io/api/products/";

export async function getProducts() {
  try {
    const { data: products } = await axios.get(URL_API_PRODUCTS);
    return products;
  } catch (err) {
    console.log("Error axios get", err.message);
  }
}

export async function createProduct(product) {
  try {
    const { data: newProduct } = await axios.post(URL_API_PRODUCTS, product);
    return newProduct;
  } catch (err) {
    console.log("Axios post Err", err.message);
  }
}

export async function updateProduct(id, product) {
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

export async function removeProduct(id) {
  try {
    const { data: removedProduct } = await axios.delete(URL_API_PRODUCTS + id);
    return removedProduct;
  } catch (err) {
    console.log("Axios delete Err", err.message);
  }
}
