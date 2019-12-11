import React from "react";
import App from "./app-view";
import Cookies from "universal-cookie";
import { sendRequest, RequestType } from "../../utils/";
import "flatpickr/dist/themes/light.css";

/**
 * Container for the app view.
 */
export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.cookies = new Cookies();

    this.state = {
      user: null,
      authorizationToken: this.cookies.get("authorizationToken"),

      targetDate: new Date(),

      selectedAccount: null,

      // This should house any data needed to show specific components
      components: {
        mainModal: { visible: false },
        loginForm: { visible: false },
        registerForm: { visible: false }
      }
    };
  }

  /**
   * Set the current user after the component mounts since the authorization token should be set by then.
   */
  componentDidMount = () => {
    this.setCurrentUser();
  };

  /**
   * Set the authorization token value and store it in a cookie.
   *
   * @param {String} token The token value
   */
  setAuthorizationToken = token => {
    return new Promise(resolve => {
      this.cookies.set("authorizationToken", token, { path: "/" });
      this.setState({ authorizationToken: token }, resolve);
    });
  };

  /**
   * Send a request to the server to get the current user's data (based on the authorization token)
   * and store that in the component state.
   */
  setCurrentUser = () => {
    if (this.state.authorizationToken) {
      return sendRequest(
        RequestType.GET,
        "users/current",
        this.state.authorizationToken
      )
        .then(
          response =>
            new Promise(resolve =>
              this.setState({ user: response.data }, resolve)
            )
        )
        .catch(error => {
          if (error.response.data.validationErrors.authorizationToken) {
            return this.logoutCurrentUser();
          }
        });
    }
  };

  /**
   * Logout the current user by removing the auth token cookie and resetting the state.
   */
  logoutCurrentUser = () => {
    this.cookies.remove("authorizationToken");
    return new Promise(resolve =>
      this.setState({ user: null, authorizationToken: null }, resolve)
    );
  };

  /**
   * Set the target date.
   */
  setTargetDate = date => {
    return new Promise(resolve => this.setState({ targetDate: date }, resolve));
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

  /**
   * Set the selected account.
   *
   * @param {Object} account The newly selected account
   */
  setSelectedAccount = account => {
    this.setState({ selectedAccount: account });
  };

  // Object housing functions that need to be called from other components
  functions = {
    toggleMainModal: this.toggleMainModal,
    onClickLogin: this.onClickLogin,
    onClickRegister: this.onClickRegister,
    setAuthorizationToken: this.setAuthorizationToken,
    setCurrentUser: this.setCurrentUser,
    logoutCurrentUser: this.logoutCurrentUser,
    setTargetDate: this.setTargetDate,
    setSelectedAccount: this.setSelectedAccount
  };

  /**
   * Render the view.
   */
  render() {
    return (
      <App
        user={this.state.user}
        authorizationToken={this.state.authorizationToken}
        targetDate={this.state.targetDate}
        selectedAccount={this.state.selectedAccount}
        functions={this.functions}
        components={this.state.components}
        isMainModalActive={this.state.isMainModalActive}
      />
    );
  }
}
