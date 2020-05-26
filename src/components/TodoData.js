import React, { Component } from 'react';

class TodoData extends Component {
    render() {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span style={{ textDecoration: this.props.todo.complete ? "line-through" : "none" }}>{this.props.todo.todoText}</span>
                    <div>
                        <button type='button' onClick={this.props.onDelete} className="btn btn-sm btn-danger p-1 px-2 mx-1"> ✖ </button>
                        <button type='button' onClick={this.props.toggleComplete} className="btn btn-sm btn-success p-1 px-2 mx-1"> ✔ </button>
                    </div>
                </li>
            </ul>
        );
    }
}

export default TodoData;