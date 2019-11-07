/**
 * Return true if a user is logged in, false otherwise.
 *
 * @param {Object} props Properties passed from the calling component
 */
export const isUserLoggedIn = props => {
  return props.user !== undefined && props.user !== null;
};

export default { isUserLoggedIn };
