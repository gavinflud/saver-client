import React from "react";

/**
 * The main modal for the app. When active, it overlays everything on-screen.
 *
 * @param {Object} props Properties passed from the calling component
 */
const MainModal = props => {
  return (
    <div className="gf-modal modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head has-background-primary">
          <p className="modal-card-title has-text-white">{props.title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.onClickClose}
          ></button>
        </header>
        <section className="modal-card-body">{props.children}</section>
      </div>
    </div>
  );
};

export default MainModal;
