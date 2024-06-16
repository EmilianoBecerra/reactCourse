import "./Table.css";

export const Table = (props) => {
  const { products, update, remove } = props;

  return (
    <div className="Table">
      {products.length <= 0 ? (
        <h3 className="alert-danger p-3"> No se encontraron productos </h3>
      ) : (
        <div className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th> id </th>
                <th> Nombre </th>
                <th> Precio </th>
                <th> Stock </th>
                <th> Descripción </th>
                <th> Foto </th>
                <th> Accion </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.description}</td>
                  <td>
                    <img src={product.img} alt={product.name} width={50} />
                  </td>
                  <td>
                    <button
                      className=" btn btn-warning mr-3 mb-2 "
                      onClick={() => update(product.id)}
                    >
                      Actualizar
                    </button>

                    <button
                      className=" btn btn-danger "
                      onClick={() => remove(product.id)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
