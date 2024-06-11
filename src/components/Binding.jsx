import React from 'react';
import './Binding.css'


export default class Binding extends React.Component {
    state = {
        mensaje : 'Soy un mensaje',
        valor1: 456,
        valor2: 456,
        contador: 789
    }

    render() {
        const {titulo} = this.props;
        const {valor1, valor2, contador} = this.state;

        return (
            <div className="Binding">
                <div className="jumbotron">
                    <h3>Componente {titulo}</h3>
                    <hr />

                    {/* ------------------------------------------------ */}
                    <h4><u> Property Binding </u></h4>
                    <br />
                    <input type="text" value= "123" readOnly /> <br />
                    <input type="text" value= {456} readOnly /> <br />
                    <input type="text" value= {valor1} readOnly /> <br />

                    <h4><u> Event Binding </u></h4>
                    <button className='btn btn-success my-4' onClick={ 
                        () => this.setState(prevstate => ({contador: prevstate.contador + 1}))
                     }> Contar { contador } </button>

                     <h4><u> Doble Data Binding (Manual) </u></h4>
                     <br />

                     <input type="text" value= {valor2} onChange={
                        e => this.setState({ valor2 : e.target.value })
                    } /> <br />


                </div>
            </div>
        )
    }
}                 

