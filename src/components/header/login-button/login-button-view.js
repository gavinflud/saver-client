import React from "react";
import Modal from "../../modal";
import LoginForm from "../../login-form";
import RegisterForm from "../../register-form";

/**
 * Gets the modal to show (if one should be shown).
 *
 * @param {Object} props Properties passed from the calling component
 */
const getModal = props => {
  if (props.login.isFormVisible) {
    return (
      <Modal title="Login" onClickClose={props.login.onClickClose}>
        <LoginForm
          functions={props.functions}
          authorizationToken={props.authorizationToken}
          closeForm={props.login.onClickClose}
        />
      </Modal>
    );
  } else if (props.register.isFormVisible) {
    return (
      <Modal title="Register" onClickClose={props.register.onClickClose}>
        <RegisterForm closeForm={props.register.onClickClose} />
      </Modal>
    );
  }

  return "";
};

/**
 * Pair of buttons to enable logging in or registering.
 *
 * @param {Object} props Properties passed from the calling component
 */
const LoginRegisterButtons = props => {
  const loginButtonClass = "button is-primary " + props.buttonClass;
  const registerButtonClass = "button " + props.buttonClass;
  const modal = getModal(props);

  return (
    <div className={props.rootClass}>
      <span className={loginButtonClass} onClick={props.login.onClickButton}>
        Login
      </span>
      <span
        className={registerButtonClass}
        onClick={props.register.onClickButton}
      >
        Register
      </span>
      {modal}
    </div>
  );
};

export default LoginRegisterButtons;
