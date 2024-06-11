import React from 'react';
import './App.css'
import Counter from './components/Counter';
import { Menssage } from './components/Message';
import Binding from './components/Binding';
import Estructure from './components/Estructure';
import Attribute from './components/Attribute';
import Form from './components/Form';


function MostrarDatosHijos(props) {
  const {id,contador1,contador2} = props.datos
  return (
    id?
    <h3 className='alert alert-success'>Datos recibidos del contador Nro. ({id}): c1[{contador1}] - c2[{contador2}]</h3>
    :
    <h3 className='alert alert-danger'> No hay datos para mostrar</h3>
  )
}

class App extends React.Component {

  state = {
    valueInitial: 0,
    indice: 0,
    datos: { id: null, contador1: null, contador2: null }
  }

  recibirDatosDelHijo(datos) {
    this.setState({datos})
  }

  render() {
    const { indice, valueInitial } = this.state;
    const colores = ['red', 'green', 'blue', 'pink'];
    const {datos} = this.state;

    return (
      <div className="App">
        <div className="container mt-3">
          <div className='jumbotron'>
            <h1> Mi primer proyecto React </h1>
            <br />
            
            <div className="row">
              <div className="col-4"> <Menssage titulo='Mensaje Nro 1' color='green' /> </div>
              <div className="col-4"> <Menssage titulo='Mensaje Nro 2' color='orangered' /> </div>
              <div className="col-4">  <Menssage titulo='Mensaje Nro 3' color='blueviolet' /> </div>
            </div>

            <hr />

            <Binding titulo={ 'Binding' }/>
            <Estructure titulo={ 'Estructura' }/>
            <Attribute titulo={ 'Atributos' }/>
            <Form titulo={ 'Formulario' }/>

            <button className='btn btn-warning mb-3' onClick={
              () => this.setState(prevstate => ({ valueInitial: prevstate.valueInitial + 1 }))
            }>
            <h4>{`Cambiar valor inicial -> ${valueInitial}`}</h4></button>

            <hr />
            
            <button className='btn btn btn-warning mb-3' onClick={
              () => this.setState(prevstate => ({ indice: (prevstate.indice + 1) % colores.length }))
            }> <h4>{`cambiar color de fondo(contador 1) -> ${colores[indice]}`}</h4> </button>
        
            <hr />
            <h2> Uplifting y rendering incondicional </h2>

            <MostrarDatosHijos datos={datos}/>
            <h2> Contadores </h2>
            <div className="row">
              <div className="col-6">
                <Counter id='1' color={ colores[indice] } value1={ valueInitial } value2={ 0 } enviarDatosAlPadre={ datos => this.recibirDatosDelHijo(datos) } />
              </div>
              <div className="col-6">
                <Counter id='2' color='black' value1={ 0 } value2={ 0 } enviarDatosAlPadre={ datos => this.recibirDatosDelHijo(datos) } />
              </div>
            </div>
            
            <h2>Otros componentes</h2>

            
            
          </div>
        </div>
      </div >
    );
  }
}



export default App;

// export default App ----> import App from 'talLugar'
// export function App(){} ---> import {App} from 'talLugar' 

