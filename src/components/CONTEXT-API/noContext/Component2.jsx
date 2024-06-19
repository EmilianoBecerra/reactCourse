import "./Component2.css";
import { Component3 } from "./Component3";

export function Component2(props) {
  const { counter, setCounter } = props;

  return (
    <div className="Component2">
      <div className="jumbotron">
        <h2>Component 2 - {counter}</h2>
        <hr />
        <Component3 counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}
