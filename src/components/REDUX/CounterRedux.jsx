import { useSelector, useDispatch } from "react-redux";
import { accDecrement, middlewareIncrementAsync } from "../../state/2_actions";

export function CounterRedux(props) {
  const { title } = props;
  const counter = useSelector((state) => state.counter);
  const counter2 = useSelector((state) => state.counter2);
  const dispatch = useDispatch();
  return (
    <div className="CounterRedux">
      <div className="jumbotron">
        <h2>
          <u> Componente {title}</u>
        </h2>
        <hr />
        <h3>Valor 1: {counter}</h3>
        <h3>Valor 2: {counter2}</h3>

        <button
          className="btn btn-danger my-3 mr-3"
          onClick={() => dispatch(accDecrement(1))}
        >
          Decrementar
        </button>

        <button
          className="btn btn-success my-3"
          onClick={() => dispatch(middlewareIncrementAsync(1))}
        >
          Incrementar
        </button>
      </div>
    </div>
  );
}
