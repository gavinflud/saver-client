import React from "react";
import TransactionList from "./transaction-list-view";
import TransactionBar from "./transaction-bar/";
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

  componentDidUpdate = previousProps => {
    if (previousProps.selectedAccount !== this.props.selectedAccount) {
      this.setTransactions();
    }
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
        {
          accountId: this.props.selectedAccount.id,
          page: this.state.pageNumber,
          size: 10
        }
      ).then(response =>
        this.setState({
          transactions: response.data.content,
          pageNumber: response.data.number,
          totalPages: response.data.totalPages
        })
      );
    }
  };

  /**
   * Navigate to the previous page
   */
  previousPage = () => {
    if (this.canClickPreviousPage()) {
      this.setState(
        { pageNumber: this.state.pageNumber - 1 },
        this.setTransactions
      );
    }
  };

  /**
   * Navigate to the next page.
   */
  nextPage = () => {
    if (this.canClickNextPage()) {
      this.setState(
        { pageNumber: this.state.pageNumber + 1 },
        this.setTransactions
      );
    }
  };

  /**
   * Return true if there is a previous page.
   */
  canClickPreviousPage = () => {
    return this.state.pageNumber > 0;
  };

  /**
   * Return true if there is a next page.
   */
  canClickNextPage = () => {
    return this.state.pageNumber < this.state.totalPages - 1;
  };

  /**
   * Render the view.
   */
  render() {
    return (
      <div>
        <TransactionBar />
        <TransactionList
          transactions={this.state.transactions}
          pageNumber={this.state.pageNumber + 1}
          totalPages={this.state.totalPages}
          canClickPreviousPage={this.canClickPreviousPage}
          canClickNextPage={this.canClickNextPage}
          previousPage={this.previousPage}
          nextPage={this.nextPage}
        />
      </div>
    );
  }
}

export default TransactionListContainer;
