import React from "react";
import AccountRow from "./account-list-row-view";
import "./account-list-view.css";

/**
 * Lists the accounts for the current user.
 *
 * @param {Object} props Properties passed from the calling component
 */
const AccountList = props => {
  const rows = props.accounts.map(account => (
    <AccountRow key={account.id} account={account} />
  ));
  return (
    <div className="gf-widget">
      <div className="gf-widget-toolbar level">
        <div className="level-left"></div>
        <div className="level-right">
          <span className="button is-primary is-small level-item">Add</span>
        </div>
      </div>
      <div className="gf-widget-content gf-account-list">
        <ul>{rows}</ul>
      </div>
    </div>
  );
};

export default AccountList;
