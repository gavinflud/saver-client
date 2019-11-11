import React from "react";
import UserMenu from "./user-menu-view";

/**
 * Container for the user menu view.
 */
class UserMenuContainer extends React.Component {
  /**
   * Constructor.
   *
   * @param {Object} props Properties passed from the calling component
   */
  constructor(props) {
    super(props);
    this.state = {
      isDropdownActive: false
    };
  }

  /**
   * Toggle the state of the dropdown (if true, the dropdown is shown).
   */
  toggleDropdownState = () => {
    this.setState({ isDropdownActive: !this.state.isDropdownActive });
  };

  /**
   * Helper function to logout the current user and prevent the link event from firing.
   */
  logoutCurrentUser = event => {
    event.preventDefault();
    this.props.logoutCurrentUser();
  };

  // The functions needed by the user menu view
  functions = {
    toggleDropdownState: this.toggleDropdownState,
    logoutCurrentUser: this.logoutCurrentUser
  };

  /**
   * Render.
   */
  render() {
    return (
      <UserMenu
        functions={this.functions}
        isDropdownActive={this.state.isDropdownActive}
        rootClass={this.props.rootClass}
        itemClass={this.props.itemClass}
        user={this.props.user}
      />
    );
  }
}

export default UserMenuContainer;
