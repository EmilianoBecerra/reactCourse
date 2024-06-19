import "./Component4.css";

export function Component4(props) {
  const { counter, setCounter } = props;

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
  );
}
