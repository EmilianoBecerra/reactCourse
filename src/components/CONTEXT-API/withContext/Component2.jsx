import { useContext } from "react";
import "./Component2.css";
import { Component3 } from "./Component3";
import { CounterContext } from "../Context";

export function Component2() {
  const [counter] = useContext(CounterContext);

  return (
    <div className="Component2">
      <div className="jumbotron">
        <h2>Component 2 - {counter} </h2>
        <hr />
        <Component3 />
      </div>
    </div>
  );
}
