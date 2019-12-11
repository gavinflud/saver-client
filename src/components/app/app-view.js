import React from "react";
import Header from "../header/";
import Sidebar from "../sidebar/";
import MainContent from "../main-content/main-content-view";
import "./app.css";
import "bulma/css/bulma.css";

/**
 * Main app view.
 *
 * @param {Object} props Properties passed from the calling component
 */
const App = props => {
  const sidebarFunctions = {
    setTargetDate: props.functions.setTargetDate,
    setSelectedAccount: props.functions.setSelectedAccount
  };

  return (
    <div className="gf-app">
      <div className="gf-header-container section">
        <div className="container">
          <Header user={props.user} functions={props.functions} />
        </div>
      </div>

      <div className="gf-main-container container">
        <div className="columns">
          <Sidebar
            className="is-one-quarter column"
            authorizationToken={props.authorizationToken}
            targetDate={props.targetDate}
            functions={sidebarFunctions}
            user={props.user}
          />
          <MainContent
            className="column"
            authorizationToken={props.authorizationToken}
            selectedAccount={props.selectedAccount}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
