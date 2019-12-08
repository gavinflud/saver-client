import React from "react";

/**
 * Form for adding or editing accounts.
 *
 * @param {Object} props Properties passed from the calling component
 */
const AccountForm = props => {
  const accountTypes = props.accountTypes.map(accountType => (
    <option key={accountType.id} value={accountType.id}>
      {accountType.name}
    </option>
  ));

  const isEdit = props.account.id !== null && props.account.id !== undefined;

  return (
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
                name="accountTypeId"
                className="gf-select"
                value={props.account.accountTypeId}
                onChange={props.functions.handleInputChange}
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
              {isEdit ? "Update" : "Create"}
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
  );
};

export default AccountForm;
