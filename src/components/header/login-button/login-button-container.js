import React from "react";
import LoginRegisterButtons from "./login-button-view";

/**
 * Container to hold the business logic for the LoginRegisterButtons view.
 */
class LoginRegisterButtonsContainer extends React.Component {
  /**
   * Handle the login button being clicked.
   */
  onClickLogin = event => {
    event.preventDefault();
    this.props.onClickLogin();
  };

  /**
   * Handle the register button being clicked.
   */
  onClickRegister = event => {
    event.preventDefault();
    this.props.onClickRegister();
  };

  /**
   * Render the view.
   */
  render() {
    return (
      <LoginRegisterButtons
        buttonClass={this.props.buttonClass}
        rootClass={this.props.rootClass}
        onClickLogin={this.onClickLogin}
        onClickRegister={this.onClickRegister}
      />
    );
  }
}

export default LoginRegisterButtonsContainer;
