import React, {Component} from 'react';
import './app.css'

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends Component {    
    maxId = 100;

    state = {
      todoData: [
        this.createTodoItem("Stay strong"),
        this.createTodoItem("Stay strong"),
        this.createTodoItem("Stay strong"),
        this.createTodoItem("Stay strong"),
      ]
    }

    createTodoItem(label) {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
    }

    deleteItem = (id) => {
      this.setState( ({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id)
        const newArray = [...todoData.slice(0, idx), 
                          ...todoData.slice(idx + 1)];
        return {
          todoData: newArray
        }
      })
    }

    addItem = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState( ({ todoData }) => {
        const newArray = [...todoData, newItem]

        return {
          todoData: newArray
        }

      })
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id)
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
    }

    onToggleImportant = (id) => {
      this.setState( ({ todoData }) => {
        return{
          todoData: this.toggleProperty(todoData, id, 'important')
        }
      })
    }

    onToggleDone = (id) => {
      this.setState( ({ todoData }) => {
        return{
          todoData: this.toggleProperty(todoData, id, 'done')
        }
      })
    }

  render() {
   const {todoData} = this.state;

   const doneCount = todoData.filter( el => el.done).length;
   const moreTodo = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={moreTodo} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addItem={this.addItem}/>
      </div>
    );
    }
  }



/* function App() {
  const todos = [
    { label : "Be strong", id: 1 },
    { label : "Don't give up", id: 2 },
    { label : "Write code", id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={4} done={2}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList 
        todos={todos}
        onDeleted={(id) => console.log(id)}
      />
    </div>
  );
}

export default App;

*/
