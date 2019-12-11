import React from "react";
import TransactionList from "./transaction-list-view";
import { sendRequest, RequestType } from "../../utils";

/**
 * Container for the transaction list view.
 */
class TransactionListContainer extends React.Component {
  state = {
    transactions: [],
    pageNumber: 0,
    totalPages: 0
  };

  componentDidMount = () => {
    this.setTransactions();
  };

  /**
   * Make a call to get the transactions for the selected account.
   */
  setTransactions = () => {
    if (this.props.selectedAccount) {
      sendRequest(
        RequestType.GET,
        "transactions",
        this.props.authorizationToken,
        { accountId: this.props.selectedAccount.id }
      ).then(response =>
        this.setState({ transactions: response.data.content })
      );
    }
  };

  /**
   * Render the view.
   */
  render() {
    return (
      <TransactionList
        transactions={this.state.transactions}
        pageNumber={this.state.pageNumber}
        totalPages={this.state.totalPages}
      />
    );
  }
}

export default TransactionListContainer;
