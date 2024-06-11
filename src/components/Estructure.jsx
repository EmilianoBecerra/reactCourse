import React from 'react';
import './Estructure.css'



export default class Estructure extends React.Component {

    state = {
        mostrar: true,
        personas: ['Pedro', 'Juan', 'Ana', 'Gaby'],
        alumnos: [
            {
                nombre: 'Pedro',
                apellido: 'Blanco',
                edad: 23,
                curso: false,
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png'
            },
            {
                nombre: 'Juan',
                apellido: 'Mei',
                edad: 22,
                curso: true,
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-256.png'
            },
            {
                nombre: 'Ana',
                apellido: 'Picos',
                edad: 32,
                curso: true,
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-256.png'
            },
            {
                nombre: 'Gaby',
                apellido: 'Perez',
                edad: 30,
                curso: false,
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png'
            },

        ]
    }

    render() {
        const { titulo } = this.props;
        const { mostrar, personas, alumnos } = this.state
        return (
            <div className="Estructura">
                <div className="jumbotron">
                    <h3> Componente {titulo} </h3>
                    <hr />
                    <h4><u> Rendering condicional </u></h4>
                    <br />

                    <button className='btn btn-success my-2' onClick={
                        () => this.setState(prevstate => ({ mostrar: !prevstate.mostrar }))
                    }>{mostrar ? 'Ocultar' : 'Mostrar'}</button>

                    {
                        mostrar &&
                        <p className='alert alert-info'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui esse excepturi similique voluptatem itaque, eveniet nobis atque nemo veritatis quibusdam aliquam laudantium adipisci commodi pariatur. Voluptates est error cumque dolores?
                        </p>
                    }

                    <h4><u> Loop Rendering </u></h4>
                    <br />
                    <h5><u> Array de personas en una lista </u></h5>
                    <br />

                    <ul>
                        {
                            personas.map((persona, index) => <li key={index}> {index} - {persona} </li>)
                        }
                    </ul>

                    <h5><u> Array de alumnos en una lista </u></h5>
                    <br />

                    <ul>
                        {
                            alumnos.map((alumno, index) => <li key={index}>{index + 1} - {alumno.nombre} {alumno.apellido} </li>)
                        }
                    </ul>

                    <h5><u> Array de alumnos en una tabla estatica </u></h5>
                    <br />

                    <div className='table-responsive'>
                        <table className='table table-dark'>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Edad</th>
                                    <th>Curso</th>
                                    <th>Foto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alumnos.filter(alumno => alumno.nombre).map((alumno, index) => {
                                        return (
                                            <tr key={ index }>
                                                <td>
                                                    { alumno.nombre }
                                                </td>
                                                <td>
                                                    { alumno.apellido }
                                                </td>
                                                <td>
                                                    { alumno.edad }
                                                </td>
                                                <td>
                                                    { alumno.curso ? 'Si' : 'No' }
                                                </td>
                                                <td>
                                                    <img src={ alumno.foto } alt={ alumno.nombre } width={ '30px' } />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

