import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';
// в TodoListItem заменила label = {item.label} important={item.important} 
//при помощи спред оператора {...item } передает все свойиства нужного компонента. 
//key, обычно получают из базы данных (id)но лучше не использовать 1 2 3 
const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem { ...itemProps  }/>     
            </li>
        );
    });
    return(  
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;