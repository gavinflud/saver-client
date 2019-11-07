import React from "react";

/**
 * Pair of buttons to enable logging in or registering.
 *
 * @param {Object} props Properties passed from the calling component
 */
const LoginRegisterButtons = props => {
  const loginButtonClass = "button is-primary " + props.buttonClass;
  const registerButtonClass = "button " + props.buttonClass;
  return (
    <div className={props.rootClass}>
      <span className={loginButtonClass} onClick={props.onClickLogin}>
        Login
      </span>
      <span className={registerButtonClass} onClick={props.onClickRegister}>
        Register
      </span>
    </div>
  );
};

export default LoginRegisterButtons;
