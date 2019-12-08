import React from "react";

/**
 * Login form view.
 */
const LoginForm = props => {
  return (
    <div className="gf-register-form">
      <form>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="username"
              value={props.user.username}
              onChange={props.functions.handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name="password"
              value={props.user.password}
              onChange={props.functions.handleInputChange}
            />
          </div>
        </div>

        {props.errorMessage !== "" ? (
          <div className="notification is-danger">{props.errorMessage}</div>
        ) : (
          ""
        )}

        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              onClick={props.functions.submitForm}
            >
              Login
            </button>
          </div>
          <div className="control">
            <button
              className="button is-link is-light"
              onClick={props.functions.closeForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
