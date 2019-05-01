import React, { Component } from 'react';
import { TodoForm } from './components/TodoForm';
import { List } from './components/List';
import { ListItem } from './components/Listitem';

class TodoApp extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-5 mt-5">Awesome TO-DO'S !!</h1>
        <hr />
        <TodoForm />
        <div className="row">
          <div className="col">
            <h3>My Task List</h3>
            <List />

          </div>

          <div className="col">
            <h3>Completadas</h3>
            <hr />
            <List />


          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
