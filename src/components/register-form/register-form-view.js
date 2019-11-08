import React from "react";

/**
 * Register form component.
 */
class RegisterForm extends React.Component {
  /**
   * Constructor.
   *
   * @param {Object} props Properties passed from the calling component
   */
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",

      // Validate the password the user entered matches what they wanted
      repeatPassword: ""
    };
  }

  /**
   * Close the form.
   */
  closeForm = event => {
    event.preventDefault();
    this.props.closeForm();
  };

  /**
   * Return true if the two password values match.
   */
  doPasswordsMatch = () => {
    return this.state.password === this.state.repeatPassword;
  };

  /**
   * Return true if the password is in a valid format.
   */
  isPasswordValid = () => {
    return this.state.password.length > 11;
  };

  /**
   * Handle any change to any of the form inputs and update the state accordingly.
   */
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  /**
   * Render.
   */
  render() {
    const arePasswordsMatching = this.doPasswordsMatch();
    const isPasswordValid = this.isPasswordValid();
    const passwordsDoNotMatchClass = arePasswordsMatching ? "is-hidden" : "";
    const passwordInvalidClass = isPasswordValid ? "is-hidden" : "";

    return (
      <div className="gf-register-form">
        <form>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Joe"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Bloggs"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="jbloggs"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className={"input " + (isPasswordValid ? "" : "is-danger")}
                type="password"
                placeholder="Must be 12 characters or more"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <p className={"help is-danger " + passwordInvalidClass}>
              Password must be 12 characters or more
            </p>
          </div>

          <div className="field">
            <label className="label">Repeat Password</label>
            <div className="control">
              <input
                className={"input " + (arePasswordsMatching ? "" : "is-danger")}
                type="password"
                name="repeatPassword"
                value={this.state.repeatPassword}
                onChange={this.handleInputChange}
              />
            </div>
            <p className={"help is-danger " + passwordsDoNotMatchClass}>
              Passwords do not match
            </p>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button
                className="button is-link is-light"
                onClick={this.closeForm}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
