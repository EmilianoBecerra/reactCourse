import "./Component3.css";
import { Component4 } from "./Component4";

export function Component3(props) {
  const { counter, setCounter } = props;

  return (
    <div className="Component3">
      <div className="jumbotron">
        <h2>Component 3 - {counter}</h2>
        <hr />

        <Component4 counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}
