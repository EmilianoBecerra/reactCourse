/* import { useEffect, useState } from "react"; */
import "./CounterFunctional.css";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

/* ----------------------------------------------- */
/*              statefull: con estado              */
/* ----------------------------------------------- */
function CounterFunctional(props) {
  //const [ counter, setCounter ] = useState(0);
  const [counter, setCounter] = useLocalStorage("contador", 0);

  return (
    <div className="CounterFunctional">
      <div className="jumbotron">
        <h2> Componente Contador Funcional </h2>
        <hr />

        <h3>Valor: {counter}</h3>

        <button
          className="btn btn-danger my-3 mr-3"
          onClick={() => setCounter(counter - 1)}
        >
          {" "}
          Decrementar{" "}
        </button>
        <button
          className="btn btn-success my-3 "
          onClick={() => setCounter(counter + 1)}
        >
          {" "}
          Incrementar{" "}
        </button>
      </div>
    </div>
  );
}

export default CounterFunctional;
