import React from "react";
import AccountList from "./account-list-view";
import { sendRequest, RequestType } from "../../utils";

/**
 * Container for the account list view.
 */
class AccountListContainer extends React.Component {
  state = {
    accounts: []
  };

  /**
   * Retrieve the accounts after the component mounts.
   */
  componentDidMount = () => {
    this.setAccounts();
  };

  /**
   * Get the current users accounts and update the state array.
   */
  setAccounts = () => {
    return sendRequest(
      RequestType.GET,
      "accounts",
      this.props.authorizationToken
    ).then(
      response =>
        new Promise(resolve =>
          this.setState({ accounts: response.data.content }, resolve)
        )
    );
  };

  /**
   * Render the view.
   */
  render() {
    return (
      <AccountList
        accounts={this.state.accounts}
        className={this.props.className}
      />
    );
  }
}

export default AccountListContainer;
