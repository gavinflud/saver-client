import React from "react";
import AccountRow from "./account-row/";
import AccountForm from "../account-form/";
import Modal from "../modal";
import "./account-list-view.css";

/**
 * Retrieve the new/edit account form.
 *
 * @param {Object} props Properties passed from the calling component
 */
const getAccountForm = props => {
  if (props.isAccountFormVisible) {
    return (
      <Modal title="New Account" onClickClose={props.functions.closeForm}>
        <AccountForm
          functions={props.functions}
          account={props.account}
          authorizationToken={props.authorizationToken}
        />
      </Modal>
    );
  }
};

/**
 * Lists the accounts for the current user.
 *
 * @param {Object} props Properties passed from the calling component
 */
const AccountList = props => {
  const rows = props.accounts.map(account => (
    <AccountRow
      key={account.id}
      account={account}
      onClickRow={props.functions.onClickRow}
      isSelected={props.functions.isAccountSelected}
    />
  ));

  const accountForm = getAccountForm(props);
  return (
    <div className="gf-widget">
      <div className="gf-widget-toolbar level">
        <div className="level-left"></div>
        <div className="level-right">
          <span
            className="button is-primary is-small level-item"
            onClick={props.functions.showNewAccountForm}
          >
            Add
          </span>
        </div>
      </div>
      <div className="gf-widget-content gf-account-list">
        <ul>{rows}</ul>
      </div>
      {accountForm}
    </div>
  );
};

export default AccountList;
