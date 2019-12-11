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
      user: {
        username: "",
        password: ""
      },
      errorMessage: ""
    };
  }

  /**
   * Send the login request and store the authentication token if successful. Store the user returned.
   */
  submitForm = event => {
    event.preventDefault();

    sendRequest(RequestType.POST, "users/login", null, null, this.state.user)
      .then(response => {
        this.props.functions.setAuthorizationToken(
          response.headers.authorization
        );
      })
      .then(() => {
        this.props.functions.setCurrentUser();
        this.props.errorMessage = "";
        this.props.closeForm();
      })
      .catch(error => {
        if (error.message === "Network Error") {
          this.setState({ errorMessage: "Server error" });
        } else if (error.response && error.response.status === 403) {
          this.setState({ errorMessage: "Invalid username or password" });
        }
      });
  };

  /**
   * Handle any change to any of the form inputs and update the state accordingly.
   */
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  // Functions needed by the login form view
  functions = {
    closeForm: this.props.closeForm,
    submitForm: this.submitForm,
    handleInputChange: this.handleInputChange
  };

  /**
   * Render.
   */
  render() {
    return (
      <LoginForm
        user={this.state.user}
        errorMessage={this.state.errorMessage}
        functions={this.functions}
      />
    );
  }
}

export default LoginFormContainer;
