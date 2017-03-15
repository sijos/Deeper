import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({ username: "", password: "" });
  }

  update(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  render() {
    const form = this.props.formType;
    return(
      <div>
        <h2> {form} below!</h2>
        <ul>
          {this.props.errors.map((err, idx) => (
            <li key={`${idx}`}>{err}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")}>
            </input>
          </label>
          <br />
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}>
            </input>
          </label>
          <br />
          <input type="submit" value={form}></input>
        </form>
      </div>
    );
  }
}

export default AuthForm;
