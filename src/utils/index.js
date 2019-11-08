import axios from "axios";

const URL = "http://localhost:8080/api/";

/**
 * The available HTTP request types.
 */
export const RequestType = {
  GET: "get",
  PUT: "put",
  PATCH: "patch",
  POST: "post",
  DELETE: "delete"
};

/**
 * Sends a request to the server.
 *
 * @param {String} type The HTTP request type
 * @param {String} path The path to append to the URL
 * @param {String} token The authentication token (optional)
 * @param {Object} body The request body (optional)
 */
export const sendRequest = (type, path, token, body) => {
  const request = {
    method: type,
    url: URL + path
  };

  if (token) {
    request["headers"] = { Authorization: token };
  }

  if (body) {
    request["data"] = body;
  }
  return axios(request);
};

/**
 * Return true if a user is logged in, false otherwise.
 *
 * @param {Object} props Properties passed from the calling component
 */
export const isUserLoggedIn = props => {
  return props.user !== undefined && props.user !== null;
};

export default { RequestType, sendRequest, isUserLoggedIn };
