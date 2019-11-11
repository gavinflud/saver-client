import React from "react";
import Header from "../header/";
import MainModal from "../main-modal/";
import "./app.css";
import "bulma/css/bulma.css";

/**
 * Main app view.
 *
 * @param {Object} props Properties passed from the calling component
 */
const App = props => {
  const mainModalFunctions = {
    handleLogin: props.functions.handleLogin,
    handleRegister: props.functions.handleRegister,
    toggleMainModal: props.functions.toggleMainModal,
    setAuthorizationToken: props.functions.setAuthorizationToken,
    setCurrentUser: props.functions.setCurrentUser
  };

  return (
    <div className="gf-app">
      <div className="gf-header-container section">
        <div className="container">
          <Header user={props.user} functions={props.functions} />
        </div>
      </div>

      <MainModal
        loginForm={props.components.loginForm}
        registerForm={props.components.registerForm}
        isActive={props.components.mainModal.visible}
        functions={mainModalFunctions}
        authorizationToken={props.authorizationToken}
      />
    </div>
  );
};

export default App;
