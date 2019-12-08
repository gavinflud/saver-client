import React from "react";
import AccountForm from "./account-form-view";
import { sendRequest, RequestType } from "../../utils/";

/**
 * Container for the account form view.
 */
class AccountFormContainer extends React.Component {
  state = {
    accountTypes: []
  };

  componentDidMount = () => {
    this.setAccountTypes();
  };

  /**
   * Get the available account types.
   */
  setAccountTypes = () => {
    return sendRequest(
      RequestType.GET,
      "accounttypes",
      this.props.authorizationToken
    ).then(
      response =>
        new Promise(resolve => {
          this.setState({ accountTypes: response.data }, resolve);
        })
    );
  };

  /**
   * Render the view.
   */
  render() {
    return (
      <AccountForm
        account={this.props.account}
        accountTypes={this.state.accountTypes}
        functions={this.props.functions}
      />
    );
  }
}

export default AccountFormContainer;
