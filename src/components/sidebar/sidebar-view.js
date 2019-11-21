import React from "react";
import AccountList from "../account-list/";
import DatePicker from "../date-picker/";
import { isUserLoggedIn } from "../../utils/";
import "./sidebar-view.css";

/**
 * Sidebar for the application which should show configuration options and secondary data.
 *
 * @param {Object} props Properties passed from the calling component
 */
const Sidebar = props => {
  const isHiddenClass = isUserLoggedIn(props) ? "" : "is-hidden";
  return (
    <div className={props.className}>
      <div className={isHiddenClass}>
        <DatePicker
          date={props.targetDate}
          handleDateChange={props.functions.setTargetDate}
        />
        <AccountList authorizationToken={props.authorizationToken} />
      </div>
    </div>
  );
};

export default Sidebar;
