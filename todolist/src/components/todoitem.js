import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'


class Todoitem extends Component {
  // <Todoitem title={post.title} body={post.body} key={post.id}/>

    handleDelete = () => {
        // this.props.onDelete(this.props.item);
        this.props.deletePost(this.props.id);
        // this.props.history.push('/');  
    }
  render() {
    console.log(this.props)
    return (
      <div>
        <li>
            <div className="todo-item">
                 <span className="item-title">{this.props.title}</span>
                 <p className="item-body">{this.props.body}</p>
                <span className="item-remove" onClick={this.handleDelete}> delete </span>
            </div>
        </li>    
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(null,mapDispatchToProps)(Todoitem)
