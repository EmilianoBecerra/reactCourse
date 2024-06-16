import React from "react";
import "./CounterClass.css";
class CounterClass extends React.Component {
  state = {
    counter: this.props.value,
  };

  componentDidMount() {
    //console.log('CounterClass -> ComponentDidMount')
  }
  componentDidUpdate() {
    //console.log('CounterClass -> ComponentDidUpdate')
  }
  componentWillUnmount() {
    //console.log('CounterClass -> ComponentWillUnmount')
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="CounterClass">
        <div className="jumbotron">
          <h2> Componente Contador Class </h2>
          <hr />

          <h3>Valor: {counter}</h3>

          <button
            className="btn btn-danger my-3 mr-3"
            onClick={() =>
              this.setState((prevstate) => ({ counter: prevstate.counter - 1 }))
            }
          >
            {" "}
            Decrementar{" "}
          </button>
          <button
            className="btn btn-success my-3 "
            onClick={() =>
              this.setState((prevstate) => ({ counter: prevstate.counter + 1 }))
            }
          >
            {" "}
            Incrementar{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default CounterClass;
