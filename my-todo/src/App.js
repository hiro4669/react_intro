import React, { Component } from 'react';
import './App.css';

import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
          tasks: [
              {
                  title: "Default Todo",
                  id: 0,
              }
          ],
          uniqueId: 1,
      }

      this.addTodo = this.addTodo.bind(this);
  }

  addTodo(title) {
      const {tasks, uniqueId} = this.state;
      tasks.push({
         title,
         id: uniqueId,
      });

      this.setState({
          tasks,
          uniqueId: uniqueId + 1,
      });

  }


  render() {
    return (
        <div>
        <h1>Todo App</h1>
          <TodoInput addTodo={this.addTodo}/>
          <TodoList tasks={this.state.tasks}/>
        </div>
    );
  }
}

export default App;
