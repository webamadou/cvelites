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
            console.log(`${error}`);
        });
}

function register(first_name, name, email, password, password_confirm) {
    var formData = new FormData();
    formData.append("email", email);
    formData.append("first_name", first_name);
    formData.append("name", name);
    formData.append("password", password);
    formData.append("password_confirm", password_confirm);
    return axios
        .post("http://localhost:8000/api/user/register", formData)
        .then(response => {
            return response;
        })
        .then(json => {
            return json.data;
        })
        .catch(error => {
            console.log(`${error}`);
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
}
