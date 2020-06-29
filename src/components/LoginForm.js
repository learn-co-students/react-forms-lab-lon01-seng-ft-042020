import React from "react";

class LoginForm extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {};
  // }

  state = {
    username: '',
    password: ''
  }

  userNameFunction = (e) => {
    // console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
    
  }

  passwordFunction = (e) => {
    // console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  submitFunction = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) { this.props.handleLogin(this.state) }
  }

  render() {
    return (
      <form onSubmit={this.submitFunction}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.userNameFunction} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.passwordFunction} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;