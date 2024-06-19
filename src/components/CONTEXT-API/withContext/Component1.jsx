import "./Component1.css";
import { Component2 } from "./Component2";

export function Component1() {
  return (
    <div className="Component1">
      <div className="jumbotron">
        <h2>Component 1 </h2>
        <hr />

        <Component2 />
      </div>
    </div>
  );
}
