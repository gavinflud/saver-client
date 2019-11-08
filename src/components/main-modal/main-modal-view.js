import React from "react";
import LoginForm from "../login-form/";
import RegisterForm from "../register-form/";

const loginFormComponent = props => {
  return <LoginForm closeForm={props.toggleMainModal} />;
};

const registerFormComponent = props => {
  return <RegisterForm closeForm={props.toggleMainModal} />;
};

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
            onClick={props.toggleMainModal}
          ></button>
        </header>
        <section className="modal-card-body">{modal.component}</section>
      </div>
    </div>
  );
};

export default MainModal;
