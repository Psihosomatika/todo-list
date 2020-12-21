import React from 'react';
import ReactDOM from 'react-dom';

import AppHeadtr from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

import './index.css';


const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1 },
    {label: 'Make Awesome App', important: true, id: 2 },
    {label: 'Have a lanch', important: false, id: 3 },
  ]

  return (
    <div className="index">
      <AppHeadtr  toDo={1} done={3} />
      <SearchPanel />
      <TodoList  todos={todoData} />
    </div> 
  )
};

ReactDOM.render(<App />, 
  document.getElementById('root'));