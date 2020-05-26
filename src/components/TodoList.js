import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoData from './TodoData';
import TodoFitur from './TodoFitur';

class TodoList extends Component {
    state = {
        todos: [],
        todoToShow: "all"
    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo
                }
            })
        })
    }

    updateTodoToShow = (s) => {
        console.log(s);
        
        this.setState({
            todoToShow: s
        })
    }

    onDelete = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    }

    removeAllTodosThatAreComplete = () => {
        console.log("clicked");
        
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete)
        }));
    }

    render() {
        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todos
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }
        return (
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h1 className="text-center">Todo List App</h1>
                        <TodoForm onSubmit={this.addTodo} />
                        <TodoFitur
                            todos={todos}
                            todo={todos.filter(todo => !todo.complete).length}
                            updateTodoToShow={this.updateTodoToShow}
                            removeAllTodosThatAreComplete={this.removeAllTodosThatAreComplete}
                        />
                        <br></br>
                        {todos.map(todo => (
                            <TodoData
                                key={todo.id}
                                todo={todo}
                                toggleComplete={() => this.toggleComplete(todo.id)}
                                onDelete={() => this.onDelete(todo.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;