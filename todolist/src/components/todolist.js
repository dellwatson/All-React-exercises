import React, { Component } from 'react';
import AddItem from './addItem';
import Todoitem from './todoitem';
import { connect } from 'react-redux';

class ToDoList extends Component {
    // onDelete = (item) => {
    //     const updatedTodos = this.state.todos.filter((val, index) => {
    //         return item !== val;
    //     });
    //     this.setState({
    //         todos: updatedTodos
    //     });
    //     console.log(this.state)
    // }

    // onAdd = (item) => {
    //     console.log(item)
    //     const updatedTodos = this.state.todos;
    //     updatedTodos.push(item);
    //     this.setState({
    //         todos : updatedTodos
    //     })
    // }


  render() {
    const todos = this.props.posts.map(post => {
        return (
            <Todoitem title={post.title} body={post.body} key={post.id}/>
        )
    })

    return (
        <div>
            <ul>{todos}</ul>
            <AddItem onAdd={this.onAdd}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.todos
    }
}

export default connect(mapStateToProps)(ToDoList)
