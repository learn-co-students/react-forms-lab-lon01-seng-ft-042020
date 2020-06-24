import React from "react";

class TwitterMessage extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     message: '',
  //     charLeft: this.props.maxChars
  //   };
  // }

  state = {
    message: '',
    charLeft: this.props.maxChars
  }

  handleTyping = (e) => {
    // console.log(e.target.value.length);
    this.setState({
      message: e.target.value,
      charLeft: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleTyping} value={this.state.message} />
        <p> {`${this.state.charLeft} characters left`} </p>
      </div>
    );
  }
}

export default TwitterMessage;
