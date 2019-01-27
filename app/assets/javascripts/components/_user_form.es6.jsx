class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      email: props.user.email,
      password: props.user.password,
      password_confirmation: props.user.password_confirmation,
     
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
    
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handlePasswordConfirmationChange(e) {
    this.setState({ password_confirmation: e.target.value });
  }

  render() {
    return (
      <div>
        <label>Name *</label>
        <input
          type="text"
          name="user[name]"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <label>Email *</label>
        <input
          type="email"
          name="user[email]"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <label>Password *</label>
        <input
          type="password"
          name="user[password]"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />

        <label>Password confirmation *</label>
        <input
          type="password"
          name="user[password_confirmation]"
          value={this.state.password_confirmation}
          onChange={this.handlePasswordConfirmationChange}
        />

        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    );
  }
}