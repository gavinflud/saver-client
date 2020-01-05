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
      </div>
    </div>
  );
};

export default TransactionList;
