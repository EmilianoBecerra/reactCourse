import React from "react";
import "./App.css";
import Counter from "./components/principalComponents/Counter";
import { Menssage } from "./components/principalComponents/Message";
import Binding from "./components/principalComponents/Binding";
import Estructure from "./components/principalComponents/Estructure";
import Attribute from "./components/principalComponents/Attribute";
import Form from "./components/principalComponents/Form";
import { NavBar } from "./components/principalComponents/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InvalidRoute } from "./components/principalComponents/InvalidRoute";
import Hooks from "./components/HOOKS/Hooks";
import Api from "./components/API/Api";
import Context from "./components/CONTEXT-API/Context";
import HocRP from "./components/HOC-RP/HocRP";
import { CounterRedux } from "./components/REDUX/CounterRedux";

function GetDateChild(props) {
  const { id, count1, count2 } = props.data;

  return id ? (
    <h3 className="alert alert-success">
      Datos recibidos del contador Nro. ({id}): c1[{count1}] - c2[{count2}]
    </h3>
  ) : (
    <h3 className="alert alert-danger"> No hay datos para mostrar</h3>
  );
}

class App extends React.Component {
  state = {
    contIni: 0,
    index: 0,
    data: { id: null, count1: null, count2: null },
  };

  recibeDateChild(data) {
    this.setState({ data });
  }

  render() {
    const { index, contIni, data } = this.state;
    const colors = ["red", "green", "blue", "pink"];

    return (
      <div className="App">
        <div className="container mt-3">
          <div className="jumbotron">
            <h1> Mi primer proyecto React </h1>
            <br />

            <h2>
              <u> React Router </u>
            </h2>
            <br />

            <BrowserRouter>
              <NavBar />
              <br />
              <Routes>
                <Route index element={<Binding title={"Binding"} />} />
                <Route path="binding" element={<Binding title={"Binding"} />} />
                <Route
                  path="estructura"
                  element={<Estructure title={"Estructura"} />}
                />
                <Route
                  path="atributos"
                  element={<Attribute title={"Atributos"} />}
                />
                <Route
                  path="formulario"
                  element={<Form title={"Formulario"} />}
                />
                <Route path="hooks" element={<Hooks title={"Hooks"} />} />
                <Route path="api" element={<Api title={"Api"} />} />
                <Route path="context" element={<Context />} />
                <Route path="hocrp" element={<HocRP />} />
                <Route
                  path="redux"
                  element={<CounterRedux title={"Redux"} />}
                />

                <Route path="*" element={<InvalidRoute />} />
              </Routes>
            </BrowserRouter>
            <br />
            <hr />
            <h2>
              <u> Componentes </u>
            </h2>
            <br />
            <div className="row">
              <div className="col-4">
                <Menssage title="Mensaje Nro 1" color="green" />
              </div>
              <div className="col-4">
                <Menssage title="Mensaje Nro 2" color="orangered" />
              </div>
              <div className="col-4">
                <Menssage title="Mensaje Nro 3" color="blueviolet" />
              </div>
            </div>
            <hr />
            <h2>
              <u> Cambiar estados/props de componentes </u>
            </h2>
            <br />

            <button
              className="btn btn-warning mb-3"
              onClick={() =>
                this.setState((prevstate) => ({
                  contIni: prevstate.contIni + 1,
                }))
              }
            >
              <h4> {`Cambiar valor inicial -> ${contIni}`} </h4>
            </button>
            <br />

            <button
              className="btn btn btn-warning mb-3"
              onClick={() =>
                this.setState((prevstate) => ({
                  index: (prevstate.index + 1) % colors.length,
                }))
              }
            >
              {" "}
              <h4>{`cambiar color de fondo(contador 1) -> ${colors[index]}`}</h4>{" "}
            </button>
            <br />
            <hr />
            <h2> Uplifting y rendering incondicional </h2>

            <GetDateChild data={data} />
            <h2> Contadores </h2>
            <div className="row">
              <div className="col-6">
                <Counter
                  id="1"
                  color={colors[index]}
                  ini1={contIni}
                  value2={0}
                  sendDataFather={(data) => this.recibeDateChild(data)}
                />
              </div>
              <div className="col-6">
                <Counter
                  id="2"
                  color="black"
                  ini1={0}
                  value2={0}
                  sendDataFather={(data) => this.recibeDateChild(data)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// export default App ----> import App from 'talLugar'
// export function App(){} ---> import {App} from 'talLugar'
