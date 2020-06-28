import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "", 
      charactersLeft: 280
    };
  }

  handleMessage = e => { 
    this.setState({
      message: e.target.value, 
      charactersLeft: 280 - e.target.value.length 
    }) 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={e => this.handleMessage(e)} value={this.state.message}/>
        <p>Characters remaining: {this.state.charactersLeft} </p>
      </div>
    );
  }
}

export default TwitterMessage;
