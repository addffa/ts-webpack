import React, { Component, MouseEvent } from 'react';

class ButtonHandling extends Component {
  handleClick(e: MouseEvent) {
    e.preventDefault();
    console.log(e.currentTarget.tagName);
  }

  render(){
    return <button onClick={this.handleClick}>
      {this.props.children}
    </button>
  }
}

export default ButtonHandling;