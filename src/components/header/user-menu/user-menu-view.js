import React from "react";

/**
 * Clickable username showing a menu of options.
 *
 * @param {Object} props Properties passed from the calling component
 */
const UserMenu = props => {
  const rootClass = "gf-user-menu-root" + props.rootClass;
  return (
    <div className={rootClass}>
      <p className={props.itemClass}>{props.user.fullName}</p>
    </div>
  );
};

export default UserMenu;
