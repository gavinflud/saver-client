import React from "react";
import LoginForm from "../login-form/";
import RegisterForm from "../register-form/";

/**
 * Return the login form view.
 *
 * @param {Object} props Properties passed from the calling component
 */
const loginFormComponent = props => {
  return (
    <LoginForm
      functions={props.functions}
      authorizationToken={props.authorizationToken}
    />
  );
};

/**
 * Return the register form view.
 *
 * @param {Object} props Properties passed from the calling component
 */
const registerFormComponent = props => {
  return <RegisterForm closeForm={props.functions.toggleMainModal} />;
};

/**
 * Return the correct modal to show.
 *
 * @param {Object} props Properties passed from the calling component
 */
const getModal = props => {
  if (props.loginForm.visible) {
    return {
      title: "Login",
      component: loginFormComponent(props)
    };
  } else {
    return {
      title: "Register",
      component: registerFormComponent(props)
    };
  }
};

/**
 * The main modal for the app. When active, it overlays everything on-screen.
 *
 * @param {Object} props Properties passed from the calling component
 */
const MainModal = props => {
  const modalClass = props.isActive
    ? "gf-main-modal modal is-active"
    : "gf-main-modal modal";
  const modal = getModal(props);

  return (
    <div className={modalClass}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head has-background-primary">
          <p className="modal-card-title has-text-white">{modal.title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.functions.toggleMainModal}
          ></button>
        </header>
        <section className="modal-card-body">{modal.component}</section>
      </div>
    </div>
  );
};

export default MainModal;
