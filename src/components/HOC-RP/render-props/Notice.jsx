import { useState } from "react";
import "../render-props/Notice.jsx";

export function Notice(props) {
  const { title, hovering } = props;
  return (
    <div className="Notice">
      <div className="jumbotron">
        <h3>
          <u> {title} </u>
        </h3>
        <p
          style={{
            backgroundColor: hovering ? "green" : "red",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            fontSize: "15px",
            marginTop: "15px",
          }}
        >
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum
            autem officia incidunt reiciendis libero rem provident aliquam
            accusantium, aspernatur harum optio, minima quas obcaecati veniam
            quidem quam alias excepturi! Omnis odio nihil nemo, quae at fugiat
            explicabo earum harum maxime soluta repudiandae iste doloremque.
            Voluptate debitis, numquam placeat earum nesciunt eveniet quia quasi
            eaque culpa suscipit, quisquam distinctio. Ad! Consectetur numquam
            dicta sequi eveniet vitae iusto quaerat magni expedita odit deserunt
            voluptatum temporibus doloribus ducimus aliquam necessitatibus
            officia suscipit, facere quam inventore illum nobis unde corrupti
            architecto! Nostrum, modi.
          </i>
        </p>
      </div>
    </div>
  );
}

export function Hover(props) {
  const [hovering, setHovering] = useState(false);
  const { render, children } = props;
  return (
    <>
      <div
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
      >
        {render ? render(hovering) : children(hovering)}
      </div>
    </>
  );
}
