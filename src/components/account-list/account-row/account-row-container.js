import React from "react";
import AccountRow from "./account-row-view";

/**
 * Container for the account row view.
 */
class AccountRowContainer extends React.Component {
  /**
   * Handle clicking an account row.
   */
  onClickRow = () => {
    this.props.onClickRow(this.props.account);
  };

  /**
   * Render the view.
   */
  render() {
    return (
      <AccountRow
        key={this.props.account.id}
        account={this.props.account}
        onClickRow={this.onClickRow}
        isSelected={this.props.isSelected(this.props.account)}
      />
    );
  }
}

export default AccountRowContainer;
