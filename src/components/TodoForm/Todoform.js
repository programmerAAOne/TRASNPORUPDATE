import React, { Component } from 'react';
import todos from '../../todos.json';
class TodoForm extends Component {
    constructor() {
        super();

        this.state = {
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'baja'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }




    handleInput(e) {

        const { value, name } = e.target;
        this.setState({
            [name]: value
        })

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.OnAddTodo(this.state);
        console.log(this.state);
        alert('enviando....')
    }


    render() {
        return (
            <div className="card" >
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="titulo"
                            placeholder="Titulo"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="responsable"
                            placeholder="Responsable"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="descripcion"
                            placeholder="Descripcion"
                            onChange={this.handleInput}
                        />
                    </div>
                   
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="prioridad"
                            onChange={this.handleInput}
                        >
                            <option>alta</option>
                            <option>media</option>
                            <option>baja</option>
                        </select>
                        <button type="submit" className="btn btn-primary mb-2 mt-4">Confirm identity</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm