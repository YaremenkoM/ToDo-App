import React from 'react';
import './item-add-form.css';

const ItemAddForm = ({addItem}) => {
    return(
        <form className="bottom-panel d-flex">

        <input type="text"
               className="form-control new-todo-label"
               placeholder="What needs to be done?" />

        <button type="submit"
                className="btn btn-outline-secondary"
                onClick={() => addItem('Be ind')}
                >
                    Add
        </button>
      </form>
    )
}

export default ItemAddForm;