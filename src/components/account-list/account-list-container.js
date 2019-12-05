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
    isAccountFormVisible: false
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
   * Select an account when clicking its row.
   */
  onClickRow = account => {
    if (this.state.account === account) {
      this.setState({
        account: {
          accountType: {
            id: null
          },
          name: ""
        }
      });
    } else {
      this.setState({ account: account });
    }
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
   * Show the edit account form.
   */
  showEditAccountForm = () => {
    this.setState({ isAccountFormVisible: true });
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
   * Submit the form to create or update an account.
   */
  submitForm = event => {
    event.preventDefault();

    if (this.state.account.id !== null && this.state.account.id !== undefined) {
      this.updateAccount();
    } else {
      this.createNewAccount();
    }
  };

  /**
   * Create a new account.
   */
  createNewAccount = () => {
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

  /**
   * Update an existing account.
   */
  updateAccount = () => {
    sendRequest(
      RequestType.PUT,
      "accounts/" + this.state.account.id,
      this.props.authorizationToken,
      this.state.account
    ).then(() => {
      this.setAccounts();
      this.hideAccountForm();
    });
  };

  functions = {
    onClickRow: this.onClickRow,
    isAccountSelected: this.isAccountSelected,
    showNewAccountForm: this.showNewAccountForm,
    showEditAccountForm: this.showEditAccountForm,
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
        authorizationToken={this.props.authorizationToken}
      />
    );
  }
}

export default AccountListContainer;
