import React from "react";
import moment from "moment";
import numeral from "numeral";
import TransactionRow from "./transaction-row-view";

/**
 * Container for a transaction row.
 */
class TransactionRowContainer extends React.Component {
  render() {
    const amount = numeral(Math.abs(this.props.transaction.amount)).format(
      "0,0.00"
    );
    const isPositive = this.props.transaction.amount >= 0;
    const date = moment(this.props.transaction.date).format("lll");
    const category = this.props.transaction.category.name;
    const description = this.props.transaction.description;

    return (
      <TransactionRow
        amount={amount}
        isPositive={isPositive}
        date={date}
        category={category}
        description={description}
      />
    );
  }
}

export default TransactionRowContainer;
