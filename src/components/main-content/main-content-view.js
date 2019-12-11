import React from "react";
import TransactionList from "../transaction-list/";

/**
 * Shows the main content for the application.
 *
 * @param {Object} props Properties passed from the calling component.
 */
const MainContent = props => {
  return (
    <div className={props.className}>
      <TransactionList
        authorizationToken={props.authorizationToken}
        selectedAccount={props.selectedAccount}
        // Added to re-render the component when the account changes. Otherwise the change in props doesn't
        // trigger a call to get the transactions for the new account.
        key={props.selectedAccount ? props.selectedAccount : ""}
      />
    </div>
  );
};

export default MainContent;
