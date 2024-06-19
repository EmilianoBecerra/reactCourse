import { useDispatch, useSelector } from "react-redux";
import "./Message.css";
import { accIncrement2 } from "../../state/2_actions";

/*----------------------------------------------------------------------------------*/
/*               Componente React Funcional (stateless: sin estado)                 */
/*----------------------------------------------------------------------------------*/

export const Menssage = (props) => {
  const { title, color } = props;
  const counter = useSelector((state) => state.counter);
  const counter2 = useSelector((state) => state.counter2);
  const dispatch = useDispatch();
  return (
    <div className="Menssage">
      <div className="jumbotron" style={{ backgroundColor: color }}>
        <h3>{title}</h3>
        {new Date().toLocaleDateString()}
        <hr />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae
          dolores, ex at, consectetur quo facilis nostrum expedita quas itaque,
          reprehenderit laborum. Placeat, saepe itaque error dolores nihil
          consectetur ab?
        </p>

        <p>
          valor redux : {counter} <br />
          valor redux 2: {counter2}
          <br />
          <button
            className="btn my-3"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => dispatch(accIncrement2(1))}
          >
            Incrementar
          </button>
        </p>
      </div>
    </div>
  );
};
