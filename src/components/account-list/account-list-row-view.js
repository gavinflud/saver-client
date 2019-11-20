import React from "react";

/**
 * Represents a row in an account list.
 *
 * @param {Object} props Properties passed from the calling component
 */
const AccountRow = props => {
  return <li>{props.account.name}</li>;
};

export default AccountRow;
