import React from "react";

/**
 * Shows a list of transactions for a given account.
 *
 * @param {Object} props Properties passed from the calling component
 */
const TransactionList = props => {
  return (
    <div className="gf-transaction-list-container">
      <div className="gf-transaction-list"></div>
    </div>
  );
};

export default TransactionList;
