import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {

        const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
    
        return (
            <span className={classNames}> 
                <span className="todo-list-item-label"
                    onClick={onToggleDone}
                    >
                        {label}
                </span>
    
                <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={onToggleImportant}>
                    <i className="fa fa-diamond" aria-hidden="true"></i>
                </button>
    
                <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={onDeleted}>
                    <i className="fa fa-ban" aria-hidden="true"></i>
                </button>
            </span>
        )
    }
    
}


/* const TodoListItemFunc = ({label, important = false}) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="todo-list-item"> 
            <span className="todo-list-item-label"
                style={style}>
                    {label}
            </span>

            <button type="button"
              className="btn btn-outline-success btn-sm float-right">
                <i class="fa fa-diamond" aria-hidden="true"></i>
            </button>

            <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
                <i class="fa fa-ban" aria-hidden="true"></i>
            </button>
        </span>
    )
} 

export default TodoListItem; */