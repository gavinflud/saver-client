import React from "react";

/**
 * Shows a single transaction.
 *
 * @param {Object} props Properties passed from the calling component
 */
const TransactionRow = props => {
  const amountClass = props.isPositive
    ? "gf-positive-amount"
    : "gf-negative-amount";
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.category}</td>
      <td>{props.description}</td>
      <td className={amountClass}>&euro;{props.amount}</td>
    </tr>
  );
};

export default TransactionRow;
