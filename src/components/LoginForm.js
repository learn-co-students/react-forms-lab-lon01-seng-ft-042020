import React from "react";
// import { resetHistory } from "sinon";

//QUESTIONS !!!!!!!!!!!!!!!!!
// where the state should be defined
// function handle form where??????
// default Value 

class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handleUsername = (event) => {
    // debugger
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
    // let formData = { username: this.state.username, password: this.state.password }
    // console.log(formData)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsername} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePassword} value={this.state.password} />
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
