import React from "react";
import './Hooks.css'
import CounterClass from "./CounterClass";
import CounterFunctional from "./CounterFunctional";

export default class Hooks extends React.Component {

    state = {
        getClass: true,
        getHooks: true
    }

    render() {
        const {title} = this.props
        const {getClass, getHooks} = this.state;
        return(
            
            <div className="Hooks">
                <div className="jumbotron">
                    <h3>Componentes {title}</h3>
                    <hr />
                    <button className="btn btn-warning my-3" onClick={()=> this.setState( prevstate => ({getClass: !prevstate.getClass }))} >
                        {getClass ? 'Ocultar' : 'Mostrar'} 
                    </button>
                    { getClass && <CounterClass value={ 0 }/> }
                    <hr />

                    <button className="btn btn-warning my-3" onClick={()=> this.setState( prevstate => ({getHooks: !prevstate.getHooks }))} >
                        {getHooks ? 'Ocultar' : 'Mostrar'} 
                    </button>
                    { getHooks && <CounterFunctional value={ 0 }/> }

                    
                </div>
            </div>
        )
    }
    
}