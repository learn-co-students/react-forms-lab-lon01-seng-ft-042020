import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value,
      tweetLength: event.target.value.length,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={(event) => this.handleChange(event)}
          value={this.state.tweet}
          max-chars={this.props.maxChars}
        />
        Characters left:
        {this.props.maxChars - this.state.tweetLength}/{this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
