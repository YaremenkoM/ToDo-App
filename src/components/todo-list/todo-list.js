import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = ({todos, onDeleted}) => {

    const elements = todos.map(item => {
        const {id, ...ItemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    onDeleted={() => onDeleted(id)}
                    {...ItemProps}
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