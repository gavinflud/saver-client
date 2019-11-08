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
        toggleMainModal={props.functions.toggleMainModal}
      />
    </div>
  );
};

export default App;
