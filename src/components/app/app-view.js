import React from "react";
import Header from "../header/";
import "./app.css";
import "bulma/css/bulma.css";

/**
 * Main app view.
 *
 * @param {Object} props Properties passed from the calling component
 */
const App = props => {
  const mainModalClass = props.isMainModalActive
    ? "gf-main-modal modal is-active"
    : "gf-main-modal modal";

  return (
    <div className="gf-app">
      <div className="gf-header-container section">
        <div className="container">
          <Header user={props.user} functions={props.functions} />
        </div>
      </div>

      <div className={mainModalClass}>
        <div className="modal-background"></div>
        <div className="modal-content"></div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={props.functions.toggleMainModal}
        ></button>
      </div>
    </div>
  );
};

export default App;
