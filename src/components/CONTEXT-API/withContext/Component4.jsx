import { useContext } from "react";
import { CounterContext } from "../Context";
import "./Component4.css";

export function Component4() {
  const [counter, setCounter] = useContext(CounterContext);

  return (
    <div className="Component4">
      <div className="jumbotron">
        <h2>Component 4 - {counter}</h2>
        <hr />

        <button
          className="btn btn-info my-2"
          onClick={() => setCounter(counter + 1)}
        >
          {" "}
          Incrementar{" "}
        </button>
      </div>
    </div>

    /* 
            <CounterContext.Consumer>
                { 
                ([counter, setCounter])=> 
                    <div className="Component4">
                        <div className="jumbotron">
                            <h2>Component 4 - { counter }</h2>
                            <hr />

                            <button className='btn btn-info my-2' onClick={ ()=> setCounter(counter + 1) }> Incrementar </button>
                        </div>
                    </div>
                }
            </CounterContext.Consumer> 
        */
  );
}
