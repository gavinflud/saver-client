import React from "react";
import LoginForm from "./login-form-view";
import { sendRequest, RequestType } from "../../utils/";

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
   * Send the login request and store the authentication token if successful. Store the user returned.
   */
  submitForm = event => {
    event.preventDefault();

    sendRequest(RequestType.POST, "users/login", null, this.state)
      .then(response => {
        this.props.functions.setAuthorizationToken(
          response.headers.authorization
        );
      })
      .then(() => this.props.functions.setCurrentUser())
      .then(() => this.props.closeForm());
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

  // Functions needed by the login form view
  functions = {
    closeForm: this.closeForm,
    submitForm: this.submitForm,
    handleInputChange: this.handleInputChange
  };

  /**
   * Render.
   */
  render() {
    return <LoginForm user={this.state} functions={this.functions} />;
  }
}

export default LoginFormContainer;
