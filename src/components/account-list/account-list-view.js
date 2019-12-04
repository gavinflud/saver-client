import React from "react";
import AccountRow from "./account-row/";
import Modal from "../modal";
import "./account-list-view.css";

/**
 * Retrieve the new/edit account form.
 *
 * @param {Object} props Properties passed from the calling component
 */
const getAccountForm = props => {
  const accountTypes = props.accountTypes.map(accountType => (
    <option value={accountType.id}>{accountType.name}</option>
  ));

  if (props.isAccountFormVisible) {
    return (
      <Modal title="New Account" onClickClose={props.functions.closeForm}>
        <div className="gf-account-form">
          <form>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={props.account.name}
                  onChange={props.functions.handleInputChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Type</label>
              <div className="control">
                <div className="select gf-select">
                  <select
                    name="accountType"
                    className="gf-select"
                    value={props.account.accountType.id}
                    onChange={props.functions.handleAccountTypeChange}
                  >
                    {accountTypes}
                  </select>
                </div>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-link"
                  onClick={props.functions.submitForm}
                >
                  Create
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-light"
                  onClick={props.functions.closeForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
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
