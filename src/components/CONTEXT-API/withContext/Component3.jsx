import "./Component3.css";
import { Component4 } from "./Component4";

export function Component3() {
  return (
    <div className="Component3">
      <div className="jumbotron">
        <h2>Component 3 </h2>
        <hr />

        <Component4 />
      </div>
    </div>
  );
}
