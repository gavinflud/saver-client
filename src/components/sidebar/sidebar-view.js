import React from "react";
import AccountList from "../account-list/";
import DatePicker from "../date-picker/";
import { isUserLoggedIn } from "../../utils/";
import "./sidebar-view.css";

/**
 * Retrieves the sidebar content dependent on if a user is logged in or not.
 *
 * @param {Object} props Properties passed from the calling component
 */
const getSidebarContent = props => {
  return isUserLoggedIn(props) ? (
    <div>
      <DatePicker
        date={props.targetDate}
        handleDateChange={props.functions.setTargetDate}
      />
      <AccountList authorizationToken={props.authorizationToken} />
    </div>
  ) : (
    ""
  );
};

/**
 * Sidebar for the application which should show configuration options and secondary data.
 *
 * @param {Object} props Properties passed from the calling component
 */
const Sidebar = props => {
  return <div className={props.className}>{getSidebarContent(props)}</div>;
};

export default Sidebar;
