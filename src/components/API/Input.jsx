import "./Input.css";

export default function Input(props) {
  const { name, price, stock, description, img } = props.product;
  const { onsubmit, onchange } = props;

  return (
    <div className="Input">
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="name"> nombre </label>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            className="form-control"
            value={name}
            onChange={onchange}
          />
          <label htmlFor="price"> Precio </label>
          <input
            type="number"
            id="price"
            placeholder="Precio"
            className="form-control"
            value={price}
            onChange={onchange}
          />
          <label htmlFor="stock"> stock </label>
          <input
            type="number"
            id="stock"
            placeholder="Stock"
            className="form-control"
            value={stock}
            onChange={onchange}
          />
          <label htmlFor="description"> descripcion </label>
          <input
            type="text"
            id="description"
            placeholder="Descripcion"
            className="form-control"
            value={description}
            onChange={onchange}
          />
          <label htmlFor="img"> imagen </label>
          <input
            type="text"
            id="img"
            placeholder="Imagen"
            className="form-control"
            value={img}
            onChange={onchange}
          />
        </div>

        <button className="btn btn-success mb-5 mt-3"> Enviar </button>
      </form>
    </div>
  );
}
