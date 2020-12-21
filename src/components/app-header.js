import React from 'react';

import './app-header.css';

const AppHeadtr = ({toDo, done}) => {
    return( 
    <div className="app-header d-flex">
        <h1>Todo List</h1>
        <h2>{toDo} more todo, {done} done</h2>
    </div>
    );
};

export default AppHeadtr;