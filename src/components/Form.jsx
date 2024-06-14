import React from 'react';
import './Form.css'

export default class Form extends React.Component {

    state = {
        name: '',
        surname: '',
        age: '',
        email: '',
        password: '',
        note: '',
    }

    send(e){
        e.preventDefault();
        console.log(this.state)

        this.setState({
            name: '',
            surname: '',
            age: '',
            email: '',
            password: '',
            note: '',
        })
    }

    render() {
        const { title } = this.props;
        const { name, surname, age, email, password, note } = this.state
        return(
            <div className="Form">
                <div className="jumbotron">
                    <h3>Componente { title }</h3>
                    <hr />
                    
                    <form onSubmit={ e => this.send(e) }>
                        <div className="form-group">
                            <label htmlFor="name">nombre</label>
                            <input type="text" id='name' className='form-control' placeholder='Nombre' value={name} onChange={
                                e=> this.setState({name: e.target.value} )
                            } />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">apellido</label>
                            <input type="text" id='surname' className='form-control' placeholder='Apellido' value={surname} onChange={
                                e=> this.setState({surname: e.target.value} )
                            } />
                        </div>

                        <div className="form-group">
                            <label htmlFor="age"> age </label>
                            <input type="number" id='age' className='form-control' placeholder='Años' value={ age } onChange={
                                e=> this.setState({age: e.target.value} )
                            } />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email"> email </label>
                            <input type="email" id='email' className='form-control' placeholder='Correo Electronico' value={ email } onChange={
                                e=> this.setState({email: e.target.value} )
                            } />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password"> password </label>
                            <input autoComplete='off' type="password" id='password' className='form-control' placeholder='Contraseña' value={ password } onChange={
                                e=> this.setState({password: e.target.value} )
                            } />
                        </div>

                        <div className="form-group">
                            <label htmlFor="note"> note </label>
                            <textarea id='note' rows={10} cols={30} className='form-control' placeholder='Notas' value={ note } onChange={
                                e=> this.setState({note: e.target.value} )
                            } />
                        </div>
                        
                        <button className='btn btn-success mt-3'> Enviar </button>
                    </form>

                </div>
            </div>
        )
    }
}

