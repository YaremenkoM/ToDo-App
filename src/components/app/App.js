import React, {Component} from 'react';
import './app.css'

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

export default class App extends Component {

  constructor(){
    super()
    
    this.state = {
      todoData: [
        { label : "Be strong", id: 1 },
        { label : "Don't give up", id: 2 },
        { label : "Write code", id: 3 }
      ]
    }

    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id)
        const newArray = [...todoData.slice(0, idx), 
                          ...todoData.slice(idx + 1)];
        return {
          todoData: newArray
        }
      })
    }
  }

  render() {

    const {todoData} = this.state;
  
    return (
      <div className="todo-app">
        <AppHeader toDo={4} done={2}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={todoData}
          onDeleted={this.deleteItem}
        />
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
