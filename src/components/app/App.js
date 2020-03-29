import React from 'react';
import './app.css'

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';


function App() {
  const todos = [
    { label : "Be strong", important : true, id: 1 },
    { label : "Don't give up", important : true, id: 2 },
    { label : "Write code", important : false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={4} done={2}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
