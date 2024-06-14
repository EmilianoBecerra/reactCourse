import React from 'react';
import './Counter.css';

/*----------------------------------------------------------------------------------*/
/*              Componente React basado en clase(stateful: con estado)              */
/*----------------------------------------------------------------------------------*/

class Counter extends React.Component {

  state = {
    count1: this.props.ini1,
    count2: this.props.value2,
    ini1: this.props.ini1
  }

  sendDataSuperiorLevel() {
    const data = {
      id: this.props.id,
      count1: this.state.count1,
      count2: this.state.count2
    }
    this.props.sendDataFather(data);
  }

  increment(n) {
    this.setState(prevstate => ({ ['count' + n] : prevstate['count' + n] + 1 }), ()=> { this.sendDataSuperiorLevel() });
  }

  /* ----------------------------------------------------------------------------------------- */
  /* Life Cycle Hooks (Metodos del ciclo de vida del componente => statefull basados en clase) */
  /* ----------------------------------------------------------------------------------------- */

  //Indica cuando el componente cargo su vista.
  componentDidMount() {
    
  }

  //Indica cuando el componente cambio su vista, estado o props
  componentDidUpdate() {
    const { ini1: ini1Props } = this.props;
    const { ini1: ini1State } = this.state;

    if (ini1Props !== ini1State ) {
      this.setState({ count1: ini1Props, ini1: ini1Props });
    }
   
  }

  //Incida cuando el componente sera desmontado o destruido
  componentWillUnmount() {}

  render() {
    const { id, color } = this.props;
    const { count1, count2 } = this.state;


    return (
      <div className='Counter'>
        <div className="jumbotron" style={{ backgroundColor: color }}>
          <h3> Contador N{id} </h3>
          <hr />
          
          <h4 className='alert alert-info'> Contador 1: {count1} </h4>
          
          <button className='btn btn-success my-3' onClick={
            () => this.increment(1)
          }> Incrementar </button>
          
          <hr />
          <h4 className='alert alert-info'> Contador 2: {count2} </h4>

          <button className='btn btn-success my-3' onClick={
            () => this.increment(2)
          }> Incrementar </button>
        </div>
      </div>
    );
  }
}
export default Counter;

