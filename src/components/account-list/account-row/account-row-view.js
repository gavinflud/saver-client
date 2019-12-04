import React from "react";

/**
 * Represents a row in an account list.
 *
 * @param {Object} props Properties passed from the calling component
 */
const AccountRow = props => {
  const rowClass = props.isSelected ? "gf-active" : "";
  return (
    <li onClick={props.onClickRow} className={rowClass}>
      {props.account.name}
    </li>
  );
};

export default AccountRow;
