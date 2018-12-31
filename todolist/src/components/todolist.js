import React, { Component } from 'react';
import AddItem from './addItem';
import Todoitem from './todoitem';


class ToDoList extends Component {
    constructor(){
        super();
        this.state = {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        
    }

    onDelete(item){
        const updatedTodos = this.state.todos.filter((val, index) => {
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });
        console.log(this.state)
    }

    onAdd(item){
        console.log(item)
        const updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos : updatedTodos
        })
    }


  render() {
    const todos = this.state.todos.map((item, index) =>  {
        return (
            <Todoitem key={index} item={item} onDelete={this.onDelete} />
        )

    });


    return (
        <div>
            <ul>{todos}</ul>
            <AddItem onAdd={this.onAdd}/>
        </div>
    )
  }
}
export default ToDoList;
