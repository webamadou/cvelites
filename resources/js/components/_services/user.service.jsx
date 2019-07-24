//import config from "config";
//import { authHeader } from "../_helpers";
import axios from "axios";

export const userService = {
    login,
    logout,
    register
};

function login(username, password) {
    var formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);
    return axios
        .post("http://localhost:8000/api/user/login", formData)
        .then(response => {
            return response;
        })
        .then(json => {
            if (json.data.success) {
                //user.authdata = window.btoa(username + ":" + password);
                localStorage.setItem("user", JSON.stringify(json.data.data));
            }
            return json.data;
        })
        .catch(error => {
            //alert(`An Error Occured! ${error}`);
            console.log(`${error}`);
            alert("An error occured on trying to log you in");
            /* $("#feedbacks").html(
        `<span className="alert alert-danger">An Error Occured</span>`
      ); */
            /* $("#email-login-btn")
        .removeAttr("disabled")
        .html("Login"); */
        });
}

function register(first_name, name, email, password) {
    var formData = new FormData();
    formData.append("email", email);
    formData.append("first_name", first_name);
    formData.append("name", name);
    formData.append("password", password);
    return axios
        .post("http://localhost:8000/api/user/register", formData)
        .then(response => {
            return response;
        })
        .then(json => {
            if (json.data.success) {
                //user.authdata = window.btoa(username + ":" + password);
                localStorage.setItem("user", JSON.stringify(json.data.data));
            }
            return json.data;
        })
        .catch(error => {
            //alert(`An Error Occured! ${error}`);
            console.log(`${error}`);
            alert("An error occured on trying to log you in");
            /* $("#feedbacks").html(
      `<span className="alert alert-danger">An Error Occured</span>`
    ); */
            /* $("#email-login-btn")
      .removeAttr("disabled")
      .html("Login"); */
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
}

/* function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}
 */
/* function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
} */
