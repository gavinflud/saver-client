import React from "react";
import AccountList from "../account-list/";
import "./sidebar-view.css";

/**
 * Sidebar for the application which should show configuration options and secondary data.
 *
 * @param {Object} props Properties passed from the calling component
 */
const Sidebar = props => {
  return (
    <div className={props.className}>
      <AccountList authorizationToken={props.authorizationToken} />
    </div>
  );
};

export default Sidebar;
