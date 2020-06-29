import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {

  //state = {
  //  message: "",
  //  charLeft: 280,
  //}//;

  //login = ({ username, password }) => {
  //  console.log(`Logging in ${username} with password ${password}`);
  //};

  //message = event => {
  //  debugger
  //  this.setState({
  //    message: event.target.value,
  //    charLeft: 280 - event.target.value.length
  //  })
  //}

  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage
          // those are the props !!!!!!
          maxChars={280}
        // handleMessage={this.message}
        // charLeft={this.state.charLeft}
        // message={this.state.message}
        //IF STATE MESSAGE DEFINED IN APP COMPONENT 
        // state = {
        //   message: "",
        // };
        // message={this.state.message}
        // MESSAGE HAS BEEN PPROPSED TO TWITTER MESSAGE AS A PROPS
        //TwitterMessage.js
        // <input type="text" name="message" id="message" onChange={this.props.handleMessage} value={this.props.message} /> 
        />

      </div>
    )
  }
}

export default App
