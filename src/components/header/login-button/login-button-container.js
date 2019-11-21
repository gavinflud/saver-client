import React from "react";
import LoginRegisterButtons from "./login-button-view";

/**
 * Container to hold the business logic for the LoginRegisterButtons view.
 */
class LoginRegisterButtonsContainer extends React.Component {
  state = {
    isLoginFormVisible: false,
    isRegisterFormVisible: false
  };

  /**
   * Handle the login button being clicked.
   */
  onClickLogin = event => {
    event.preventDefault();
    this.setState({ isLoginFormVisible: true, isRegisterFormVisible: false });
  };

  /**
   * Handle the register button being clicked.
   */
  onClickRegister = event => {
    event.preventDefault();
    this.setState({ isLoginFormVisible: false, isRegisterFormVisible: true });
  };

  /**
   * Handle the close form button being clicked.
   */
  onClickClose = () => {
    this.setState({ isLoginFormVisible: false, isRegisterFormVisible: false });
  };

  /**
   * Render the view.
   */
  render() {
    const login = {
      onClickButton: this.onClickLogin,
      isFormVisible: this.state.isLoginFormVisible,
      onClickClose: this.onClickClose
    };

    const register = {
      onClickButton: this.onClickRegister,
      isFormVisible: this.state.isRegisterFormVisible,
      onClickClose: this.onClickClose
    };

    return (
      <LoginRegisterButtons
        buttonClass={this.props.buttonClass}
        rootClass={this.props.rootClass}
        login={login}
        register={register}
        functions={this.props.functions}
      />
    );
  }
}

export default LoginRegisterButtonsContainer;
