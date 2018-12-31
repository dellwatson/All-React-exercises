import React, { Component } from 'react'

export default class Todoitem extends Component {
    constructor(){
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        this.props.onDelete(this.props.item);
    }
  render() {
    return (
      <div>
        <li>
            <div className="todo-item">
                 <span className="item-name">{this.props.item}</span>
                <span className="item-remove" onClick={this.handleDelete}> x </span>
            </div>
        </li>    
      </div>
    )
  }
}
