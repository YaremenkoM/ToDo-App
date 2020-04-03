import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
      label: ''
    }

    onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      })
    }

    onSubmit = (e) => {
      e.preventDefault()
      this.props.addItem(this.state.label)
      this.setState({
        label: ''
      })
    }

    render() {

      const {label} = this.state;

      return(
        <form className="bottom-panel d-flex"
              onSubmit={this.onSubmit}>

        <input type="text"
               className="form-control new-todo-label"
               placeholder="What needs to be done?" 
               onChange={this.onLabelChange}
               value={label}
               />

        <button type="submit"
                className="btn btn-outline-secondary">
                    Add
        </button>
      </form>
    )
  }
}