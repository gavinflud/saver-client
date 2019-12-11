import React from "react";
import RegisterForm from "./register-form-view";
import { sendRequest, RequestType } from "../../utils/";

/**
 * Container for the register form view.
 */
class RegisterFormContainer extends React.Component {
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
   * Register the user and close the form.
   */
  submitForm = event => {
    event.preventDefault();

    // This is in the format the server expects the user
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      credential: {
        username: this.state.username,
        password: this.state.password
      }
    };

    sendRequest(RequestType.POST, "users", null, null, user)
      .then(response => console.log(response))
      .then(() => this.props.closeForm());
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

  // Functions needed by the register form view
  functions = {
    closeForm: this.closeForm,
    submitForm: this.submitForm,
    doPasswordsMatch: this.doPasswordsMatch,
    isPasswordValid: this.isPasswordValid,
    handleInputChange: this.handleInputChange
  };

  /**
   * Render.
   */
  render() {
    return <RegisterForm functions={this.functions} user={this.state} />;
  }
}

export default RegisterFormContainer;
