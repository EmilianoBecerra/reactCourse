import React from 'react';
import './Counter.css';

/*----------------------------------------------------------------------------------*/
/*              Componente React basado en clase(stateful: con estado)              */
/*----------------------------------------------------------------------------------*/

class Counter extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

  }

  state = {
    id: this.props.id,
    contador1: this.props.value1,
    contador2: this.props.value2,
    contadorInicial: this.props.valueInitial
  }

  enviarDatosAlNivelSuperior() {
    const { id } = this.state
    const datos = {
      id,
      contador1: this.state.contador1,
      contador2: this.state.contador2
    }
    this.props.enviarDatosAlPadre(datos)
  }

  incrementar(n) {
    console.log(n)
    this.setState(prevstate => ({ ['contador' + n]: prevstate['contador' + n] + 1 }), ()=> {this.enviarDatosAlNivelSuperior()});
  }

  /* ----------------------------------------------------------------------------------------- */
  /* Life Cycle Hooks (Metodos del ciclo de vida del componente => statefull basados en clase) */
  /* ----------------------------------------------------------------------------------------- */

  //Indica cuando el componente cargo su vista.
  componentDidMount() {
    //this.enviarDatosAlNivelSuperior()
  }

  //Indica cuando el componente cambio su vista, estado o props
  componentDidUpdate() {
    const { value1 } = this.props
    const { contadorInicial } = this.state

    if (value1 !== contadorInicial) {
      this.setState({ contador1: value1, contadorInicial: value1 })
    }
  }

  //Incida cuando el componente sera desmontado o destruido
  componentWillUnmount() {}

  render() {
    const { id, color } = this.props;
    const { contador1, contador2 } = this.state;

    return (
      <div className='Counter'>
        <div className="jumbotron" style={{ backgroundColor: color }}>
          <h3> Contador N{id} </h3>
          <hr />

          <h4 className='alert alert-info'> Contador 1: {contador1} </h4>
          
          <button className='btn btn-success my-3' onClick={
            () => this.incrementar(1)
          }> Incrementar </button>

          <hr />
          <h4 className='alert alert-info'> Contador 2: {contador2} </h4>

          <button className='btn btn-success my-3' onClick={
            () => this.incrementar(2)
          }> Incrementar </button>
        </div>
      </div>
    );
  }
}
export default Counter;

