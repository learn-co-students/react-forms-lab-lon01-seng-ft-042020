import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: "", 
        password: ""
    };
  }

  handleChange = ({target: {name, value}}) => { 
    this.setState({[name]: value })
  }

  handleSubmit = e => { 
    e.preventDefault(); 
    if (this.state.username && this.state.password) { 
      this.props.handleLogin(this.state)
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            onChange={this.handleChange} 
            value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            onChange={this.handleChange}
            value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
