import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: "",
    charLeft: this.props.maxChars,
  };

  handleMessage = (event) => {
    this.setState({
      message: event.target.value,
      charLeft: this.props.maxChars - event.target.value.length,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message (max chars: {this.props.maxChars}):</strong>
        {/* <input type="text" name="message" id="message" onChange={this.props.handleMessage} value={this.state.message} /> 
        <p>{`${this.state.charLeft} characters left`}</p> */}
        <input type="text" name="message" id="message" onChange={this.handleMessage} value={this.state.message} />
        <p>{`${this.state.charLeft} characters left`}</p>
      </div>
    );
  }
}

export default TwitterMessage;
