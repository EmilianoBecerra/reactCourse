import "./Component1.css";
import { Component2 } from "./Component2";

export function Component1(props) {
  const { counter, setCounter } = props;

  return (
    <div className="Component1">
      <div className="jumbotron">
        <h2>Component 1 - {counter}</h2>
        <hr />

        <Component2 counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}
