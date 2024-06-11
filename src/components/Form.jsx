import React from 'react';
import './Form.css'



export default class Form extends React.Component {

    state = {

    }


    render() {
        const {titulo} = this.props;
        const {} = this.state
        return(
            <div className="Formulario">
                <div className="jumbotron">
                    <h3>Componente {titulo}</h3>
                    <hr />
                </div>
            </div>
        )
    }
}

