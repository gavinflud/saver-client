import React from "react";
import AccountList from "./account-list-view";
import { sendRequest, RequestType } from "../../utils";

/**
 * Container for the account list view.
 */
class AccountListContainer extends React.Component {
  state = {
    accounts: [],
    account: {
      accountType: {
        id: null
      },
      name: ""
    },
    accountTypes: [],
    isAccountFormVisible: false
  };

  /**
   * Retrieve the accounts after the component mounts.
   */
  componentDidMount = () => {
    this.setAccounts();
    this.setAccountTypes();
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
   * Get the available account types.
   */
  setAccountTypes = () => {
    return sendRequest(
      RequestType.GET,
      "types/account",
      this.props.authorizationToken
    ).then(
      response =>
        new Promise(resolve =>
          this.setState({ accountTypes: response.data }, resolve)
        )
    );
  };

  /**
   * Select an account when clicking its row.
   */
  onClickRow = account => {
    this.setState({ account: account });
  };

  /**
   * Check if a row's account is selected.
   */
  isAccountSelected = account => {
    return (
      account !== null &&
      account !== undefined &&
      account.id === this.state.account.id
    );
  };

  /**
   * Show the new account form.
   */
  showNewAccountForm = () => {
    this.setState({
      account: {
        accountType: {
          id: null
        },
        name: ""
      },
      isAccountFormVisible: true
    });
  };

  /**
   * Hide the account form.
   */
  hideAccountForm = () => {
    this.setState({ isAccountFormVisible: false });
  };

  /**
   * Handle any change to any of the form inputs and update the state accordingly.
   */
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      account: {
        ...this.state.account,
        [name]: value
      }
    });
  };

  /**
   * Handle a change to the account type select input and update the state.
   */
  handleAccountTypeChange = event => {
    const target = event.target;
    const value = target.value;

    this.setState({
      account: {
        ...this.state.account,
        accountType: {
          ...this.state.account.accountType,
          id: value
        }
      }
    });
  };

  /**
   * Submit the form to create a new account.
   */
  submitForm = event => {
    event.preventDefault();

    sendRequest(
      RequestType.POST,
      "accounts",
      this.props.authorizationToken,
      this.state.account
    ).then(response => {
      const accounts = this.state.accounts;
      accounts.push(response.data);
      this.setState({ accounts: accounts });
      this.hideAccountForm();
    });
  };

  functions = {
    onClickRow: this.onClickRow,
    isAccountSelected: this.isAccountSelected,
    showNewAccountForm: this.showNewAccountForm,
    closeForm: this.hideAccountForm,
    submitForm: this.submitForm,
    handleInputChange: this.handleInputChange,
    handleAccountTypeChange: this.handleAccountTypeChange
  };

  /**
   * Render the view.
   */
  render() {
    return (
      <AccountList
        accounts={this.state.accounts}
        accountTypes={this.state.accountTypes}
        account={this.state.account}
        className={this.props.className}
        isAccountFormVisible={this.state.isAccountFormVisible}
        functions={this.functions}
      />
    );
  }
}

export default AccountListContainer;
