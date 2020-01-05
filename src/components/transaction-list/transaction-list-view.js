import React from "react";
import TransactionRow from "./transaction-row/";
import "./transaction-list-view.css";

/**
 * Shows a list of transactions for a given account.
 *
 * @param {Object} props Properties passed from the calling component
 */
const TransactionList = props => {
  const rows = props.transactions.map(transaction => (
    <TransactionRow transaction={transaction} key={transaction.id} />
  ));

  const prevButtonClass = props.canClickPreviousPage()
    ? "has-text-primary"
    : "gf-page-button-disabled";
  const nextButtonClass = props.canClickNextPage()
    ? "has-text-primary"
    : "gf-page-button-disabled";

  return (
    <div className="gf-transaction-list-container">
      <div className="gf-transaction-list">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>

        <div className="gf-transaction-navigation-container">
          <div className="gf-transaction-navigation">
            <i
              className={"fas fa-backward fa-2x " + prevButtonClass}
              onClick={props.previousPage}
            ></i>
            <div className="gf-transaction-pages">
              {props.pageNumber} / {props.totalPages}
            </div>
            <i
              className={"fas fa-forward fa-2x " + nextButtonClass}
              onClick={props.nextPage}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
