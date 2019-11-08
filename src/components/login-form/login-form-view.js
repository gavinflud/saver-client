import React from "react";

/**
 * Login form component.
 */
class LoginForm extends React.Component {
  /**
   * Constructor.
   *
   * @param {Object} props Properties passed from the calling component
   */
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
   * Render.
   */
  render() {
    return (
      <div className="gf-register-form">
        <form>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="username"
                value={this.state.username}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name="password"
                value={this.state.password}
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Login</button>
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

export default LoginForm;
