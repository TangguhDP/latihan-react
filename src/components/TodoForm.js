import React, { Component } from 'react';
import shortid from 'shortid';

class TodoForm extends Component {
    state = {
        todoText: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            todoText: this.state.todoText,
            complete: false
        });
        this.setState({
            todoText:""
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="input-group mb-3">
                    <input
                        type="text"
                        name="todoText"
                        value={this.state.todoText}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="What do you want to do today?" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary bg-primary text-light" type="submit">Add</button>
                    </div>
            </form>
        );
    }
}

export default TodoForm;