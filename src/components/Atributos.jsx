import React from 'react';
import './Atributos.css'



export default class Atributos extends React.Component {

    state = {
        estado1: true,
        estado2: true,
    }

    cambiarEstilos(estado) {
        return {backgroundColor: estado ? 'green' : 'crimson', color: 'white', padding: '10px', borderRadius: '8px'};
    }

    cambiarClase( estado2 ) {
        return  `btn btn-${estado2 ? 'success' : 'danger'}`
    }


    render() {
        const {titulo} = this.props;
        const { estado1, estado2 } = this.state
        return(
            <div className="Atributos">
                <div className="jumbotron">
                    <h3> Componente { titulo } </h3>
                    <hr />

                    <h4><u> Propiedades CSS condicionales </u></h4>
                    <br />
                    
                    <button className='btn btn-secondary my-2' onClick={()=>{this.setState(prevstate => ({estado1: !prevstate.estado1}))}}> Cambiar fondo a {estado1 ? 'Crimson' : 'Green'} </button>
                    
                    <p style={ this.cambiarEstilos( estado1 ) }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur alias sed quo. Dolore placeat modi accusantium, nesciunt deserunt laudantium ut voluptatibus est maiores nam, atque dolorum consequatur officia adipisci provident!
                        Libero quia ea deserunt, perspiciatis aperiam laudantium natus autem itaque. Libero itaque quibusdam nostrum quisquam quia nesciunt, explicabo consectetur non eligendi. Rerum harum assumenda neque. Corporis explicabo nulla non deserunt.
                    </p>

                    <hr />
                    <h4><u> Clases CSS condicionales </u></h4>
                    <br />
                    
                    <button className='btn btn-secondary my-2' onClick={()=>{this.setState(prevstate => ({estado2: !prevstate.estado2}))}}> Cambiar fondo a {estado2 ? 'Crimson' : 'Green'} </button>
                    
                    <p className={this.cambiarClase(estado2)}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur alias sed quo. Dolore placeat modi accusantium, nesciunt deserunt laudantium ut voluptatibus est maiores nam, atque dolorum consequatur officia adipisci provident!
                        Libero quia ea deserunt, perspiciatis aperiam laudantium natus autem itaque. Libero itaque quibusdam nostrum quisquam quia nesciunt, explicabo consectetur non eligendi. Rerum harum assumenda neque. Corporis explicabo nulla non deserunt.
                    </p>
                </div>
            </div>
        )
    }
}

