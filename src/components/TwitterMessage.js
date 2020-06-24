import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      theMessage: null,
      charTyped: 0
    };
  }

  handleChange = event => {
    this.setState({
      theMessage: event.target.value,
      charTyped: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.theMessage}/>
        <br></br>
        Characters remaining: {this.props.maxChars - this.state.charTyped}
      </div>
    );
  }
}

export default TwitterMessage;
