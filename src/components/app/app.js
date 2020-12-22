import React from 'react';

import AppHeadtr from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';


const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1 },
    {label: 'Make Awesome App', important: true, id: 2 },
    {label: 'Have a lanch', important: false, id: 3 },
  ]

  return (
    <div className="index">
      <div className="todo-wrapper">
        <AppHeadtr  toDo={1} done={3} />
        <SearchPanel />
        <TodoList  todos={todoData} />
      </div>
    </div> 
  )
};

export default App;