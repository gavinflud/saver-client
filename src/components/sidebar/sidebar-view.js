import React from "react";
import AccountList from "../account-list/";
import DatePicker from "../date-picker/";
import "./sidebar-view.css";

/**
 * Sidebar for the application which should show configuration options and secondary data.
 *
 * @param {Object} props Properties passed from the calling component
 */
const Sidebar = props => {
  return (
    <div className={props.className}>
      <DatePicker
        date={props.targetDate}
        handleDateChange={props.functions.setTargetDate}
      />
      <AccountList authorizationToken={props.authorizationToken} />
    </div>
  );
};

export default Sidebar;
