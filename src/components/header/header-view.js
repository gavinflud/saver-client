import React from "react";
import LoginRegisterButtons from "./login-button/";
import UserMenu from "./user-menu/";
import { isUserLoggedIn } from "../../utils/";
import "./header-view.css";

/**
 * Return the login/register component.
 *
 * @param {Object} props Properties passed from the calling component
 */
const loginRegisterComponent = props => (
  <LoginRegisterButtons
    rootClass="level-right"
    buttonClass="level-item"
    onClickLogin={props.functions.onClickLogin}
    onClickRegister={props.functions.onClickRegister}
  />
);

/**
 * Return the user menu component.
 *
 * @param {Object} props Properties passed from the calling component
 */
const userMenuComponent = props => (
  <UserMenu rootClass="level-right" itemClass="level-item" user={props.user} />
);

/**
 * Header of a page.
 *
 * @param {Object} props Properties passed from the calling component
 */
const Header = props => {
  const rightComponent = isUserLoggedIn(props)
    ? userMenuComponent(props)
    : loginRegisterComponent(props);
  return (
    <div className="gf-header level">
      <div className="level-left">
        <h1 className="gf-logo level-item">SAVER</h1>
      </div>
      {rightComponent}
    </div>
  );
};

export default Header;
