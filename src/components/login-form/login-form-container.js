import React from "react";
import LoginForm from "./login-form-view";

/**
 * Container for the login form view.
 */
class LoginFormContainer extends React.Component {
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
    return <LoginForm user={this.state} closeForm={this.closeForm} />;
  }
}

export default LoginFormContainer;
