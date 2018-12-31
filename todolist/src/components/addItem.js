import React, { Component } from 'react';

class AddItem extends Component {
    constructor(){
        super();
        this.state = {
            value:''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.value);
        // console.log(this.refs.newItem.value)
    }
        
    handleChange(event) {
        this.setState({value: event.target.value});
      }

  render() {
    return (
      <div>
        <form className="add-todo" onSubmit={this.onSubmit}>
            <input type="text" onChange={this.handleChange}/>
            {/* <input type="text" required ref="newItem"/> */}
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddItem;

