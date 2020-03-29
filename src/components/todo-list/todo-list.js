import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = ({todos}) => {

    const elements = todos.map(item => {
        const {id, ...ItemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...ItemProps}
                />
            </li>
        )
    })

    return(
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default TodoList;