import "./InputForm.css";

export default function InputForm(props) {
  const { name, price, stock, description, img } = props.product;
  const { onsubmit, onchange, invalid } = props;

  return (
    <div className="InputForm">
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="name"> nombre </label>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            className="form-control"
            value={name ?? ""}
            onChange={onchange}
          />
          <label htmlFor="price"> Precio </label>
          <input
            type="number"
            id="price"
            placeholder="Precio"
            className="form-control"
            value={price ?? ""}
            onChange={onchange}
          />
          <label htmlFor="stock"> stock </label>
          <input
            type="number"
            id="stock"
            placeholder="Stock"
            className="form-control"
            value={stock ?? ""}
            onChange={onchange}
          />
          <label htmlFor="description"> descripcion </label>
          <input
            type="text"
            id="description"
            placeholder="Descripcion"
            className="form-control"
            value={description ?? ""}
            onChange={onchange}
          />
          <label htmlFor="img"> imagen </label>
          <input
            type="text"
            id="img"
            placeholder="Imagen"
            className="form-control"
            value={img ?? ""}
            onChange={onchange}
          />
        </div>
        <button className="btn btn-success mt-3" disabled={invalid}>
          {" "}
          Guardar{" "}
        </button>{" "}
        <p style={{ color: "black" }}>*Todos los datos son necesearios</p>
      </form>
    </div>
  );
}
