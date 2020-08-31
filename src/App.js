import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './components/Todo.css'

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }, 

  {
    task: 'Play Guitar',
    id: 1528827084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {list};
  }

  // ***** Adding Items *****

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    })
  }

  // ***** Toggling Tasks *****

  toggleItem = itemId => {
    this.setState({
      list: this.state.list.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  // ***** Clearing Completed Tasks *****

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }

  // ***** My Output *****

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList list={this.state.list} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;