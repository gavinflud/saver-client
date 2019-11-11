import React from "react";

/**
 * Clickable username showing a menu of options.
 *
 * @param {Object} props Properties passed from the calling component
 */
const UserMenu = props => {
  const rootClass = "gf-user-menu-root" + props.rootClass;
  const itemClass =
    props.itemClass +
    " dropdown " +
    (props.isDropdownActive ? "is-active" : "");
  return (
    <div className={rootClass}>
      <div className={itemClass}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={props.functions.toggleDropdownState}
          >
            <span>{props.user.firstName + " " + props.user.lastName}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a
              href="#"
              className="dropdown-item"
              onClick={props.functions.logoutCurrentUser}
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
