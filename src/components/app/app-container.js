import React from "react";
import App from "./app-view";

/**
 * Container for the app view.
 */
export default class AppContainer extends React.Component {
  state = {
    user: null,

    // This should house any data needed to show specific components
    components: {
      mainModal: { visible: false },
      loginForm: { visible: false },
      registerForm: { visible: false }
    }
  };

  /**
   * Show or hide the main modal.
   */
  toggleMainModal = () => {
    return new Promise(resolve =>
      this.setState(
        prevState => ({
          components: {
            ...prevState.components,
            mainModal: { visible: !prevState.components.mainModal.visible }
          }
        }),
        resolve
      )
    );
  };

  /**
   * Show the login form when the login button is clicked.
   */
  onClickLogin = () => {
    this.toggleMainModal().then(() =>
      this.setState(prevState => ({
        components: {
          ...prevState.components,
          loginForm: { visible: true },
          registerForm: { visible: false }
        }
      }))
    );
  };

  /**
   * Show the register form when the register button is clicked.
   */
  onClickRegister = () => {
    this.toggleMainModal().then(() =>
      this.setState(prevState => ({
        components: {
          ...prevState.components,
          loginForm: { visible: false },
          registerForm: { visible: true }
        }
      }))
    );
  };

  // Object housing functions that need to be called from other components
  functions = {
    toggleMainModal: this.toggleMainModal,
    onClickLogin: this.onClickLogin,
    onClickRegister: this.onClickRegister
  };

  /**
   * Render the view.
   */
  render() {
    return (
      <App
        user={this.state.user}
        functions={this.functions}
        components={this.state.components}
        isMainModalActive={this.state.isMainModalActive}
      />
    );
  }
}
