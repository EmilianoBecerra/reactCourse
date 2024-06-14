import React from 'react';
import './Attribute.css'



export default class Attribute extends React.Component {

    state = {
        state1: true,
        state2: true,
    }

    changeStyles(state1) {
        return { backgroundColor: state1 ? 'green' : 'crimson', color: 'white', padding: '10px', borderRadius: '8px' };
    }

    changeClass(state2) {
        return `btn btn-${state2 ? 'success' : 'danger'}`
    }


    render() {
        const { title } = this.props;
        const { state1, state2 } = this.state
        return (
            <div className="Atributos">
                <div className="jumbotron">
                    <h3> Componente {title} </h3>
                    <hr />

                    <h4><u> Propiedades CSS condicionales </u></h4>
                    <br />

                    <button className='btn btn-secondary my-2' onClick={() => { this.setState(prevstate => ({ state1: !prevstate.state1 })) }}> Cambiar fondo a {state1 ? 'Crimson' : 'Green'} </button>

                    <p style={this.changeStyles(state1)}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur alias sed quo. Dolore placeat modi accusantium, nesciunt deserunt laudantium ut voluptatibus est maiores nam, atque dolorum consequatur officia adipisci provident!
                        Libero quia ea deserunt, perspiciatis aperiam laudantium natus autem itaque. Libero itaque quibusdam nostrum quisquam quia nesciunt, explicabo consectetur non eligendi. Rerum harum assumenda neque. Corporis explicabo nulla non deserunt.
                    </p>

                    <hr />
                    <h4><u> Clases CSS condicionales </u></h4>
                    <br />

                    <button className='btn btn-secondary my-2' onClick={() => { this.setState(prevstate => ({ state2: !prevstate.state2 })) }}> Cambiar fondo a {state2 ? 'Crimson' : 'Green'} </button>

                    <p className={this.changeClass(state2)}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur alias sed quo. Dolore placeat modi accusantium, nesciunt deserunt laudantium ut voluptatibus est maiores nam, atque dolorum consequatur officia adipisci provident!
                        Libero quia ea deserunt, perspiciatis aperiam laudantium natus autem itaque. Libero itaque quibusdam nostrum quisquam quia nesciunt, explicabo consectetur non eligendi. Rerum harum assumenda neque. Corporis explicabo nulla non deserunt.
                    </p>
                </div>
            </div>
        )
    }
}

