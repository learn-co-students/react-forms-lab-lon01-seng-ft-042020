import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: "",
    charactersLeft: 280
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value,
      charactersLeft: 280 - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
        <div>{this.state.charactersLeft} Characters Left</div>
      </div>
    );
  }
}

export default TwitterMessage;
