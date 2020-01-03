import React from "react";
import "./transaction-bar-view.css";

const TransactionBar = props => {
  return (
    <div className="gf-transaction-bar columns">
      <div className="column">
        <span className="button is-block">Account Value: &euro;3,104.66</span>
      </div>
      <div className="column">
        <span className="button is-block">Net Worth: &euro;7,956.12</span>
      </div>
      <div className="column">
        <span className="button is-primary is-block">New Transaction</span>
      </div>
    </div>
  );
};

export default TransactionBar;
