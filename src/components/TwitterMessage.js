import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: '',
    maxLength: this.props.maxChars
  }


  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  limitLength = () => {

    let actualLength = this.state.message.length
    let limitFelft = this.state.maxLength - actualLength

    return (
      <h4>Remaining character limit: {limitFelft}</h4>
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={event => this.handleMessageChange(event)}
        value={this.state.message}
        maxLength={this.state.maxLength}
        />
        {this.limitLength()}
      </div>
    );
  }
}

export default TwitterMessage;
