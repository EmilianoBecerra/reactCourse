import "./Message.css";

/*----------------------------------------------------------------------------------*/
/*               Componente React Funcional (stateless: sin estado)                 */
/*----------------------------------------------------------------------------------*/

export const Menssage = (props) => {
  const { titulo, color } = props;

  return (
    <div className="Menssage">
      <div className="jumbotron" style={{ backgroundColor: color }}>
        <h3>{titulo}</h3>
        {new Date().toLocaleDateString()}
        <hr />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae
          dolores, ex at, consectetur quo facilis nostrum expedita quas itaque,
          reprehenderit laborum. Placeat, saepe itaque error dolores nihil
          consectetur ab?
        </p>
      </div>
    </div>
  );
};
