import React from "react";

/**
 * Container for the register form view.
 */
const RegisterForm = props => {
  const arePasswordsMatching = props.functions.doPasswordsMatch();
  const isPasswordValid = props.functions.isPasswordValid();
  const passwordsDoNotMatchClass = arePasswordsMatching ? "is-hidden" : "";
  const passwordInvalidClass = isPasswordValid ? "is-hidden" : "";

  return (
    <div className="gf-register-form">
      <form>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Joe"
              name="firstName"
              value={props.user.firstName}
              onChange={props.functions.handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Bloggs"
              name="lastName"
              value={props.user.lastName}
              onChange={props.functions.handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="jbloggs"
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
              className={"input " + (isPasswordValid ? "" : "is-danger")}
              type="password"
              placeholder="Must be 12 characters or more"
              name="password"
              value={props.user.password}
              onChange={props.functions.handleInputChange}
            />
          </div>
          <p className={"help is-danger " + passwordInvalidClass}>
            Password must be 12 characters or more
          </p>
        </div>

        <div className="field">
          <label className="label">Repeat Password</label>
          <div className="control">
            <input
              className={"input " + (arePasswordsMatching ? "" : "is-danger")}
              type="password"
              name="repeatPassword"
              value={props.user.repeatPassword}
              onChange={props.functions.handleInputChange}
            />
          </div>
          <p className={"help is-danger " + passwordsDoNotMatchClass}>
            Passwords do not match
          </p>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              onClick={props.functions.submitForm}
            >
              Submit
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

export default RegisterForm;
