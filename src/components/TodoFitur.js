import React, { Component } from 'react';

class TodoFitur extends Component {
    render() {
        return (
            <div className="row">
        <div className="col d-flex">
            <button className="btn btn-outline-secondary">You have <span className="badge badge-primary">
                {" " + this.props.todo + " "}
            </span> todos left</button>
            <div className="btn-group dropright mx-1">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter
                </button>
                <div className="dropdown-menu">
                    <button onClick={()=>this.props.updateTodoToShow("all")} className="dropdown-item">All</button>
                    <button onClick={()=>this.props.updateTodoToShow("active")} className="dropdown-item">Active</button>
                    <button onClick={()=>this.props.updateTodoToShow("complete")} className="dropdown-item">Complete</button>
                </div>
            </div>
            {this.props.todos.some(todo => todo.complete) ? (
                <button onClick={()=>this.props.removeAllTodosThatAreComplete()} className="btn btn-warning mx-1 text-light">
                    Remove All Complete Todos
                </button>
            ) : null}

        </div>
    </div>
        );
    }
}

export default TodoFitur;