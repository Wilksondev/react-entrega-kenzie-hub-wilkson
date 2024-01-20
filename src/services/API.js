import axios from "axios";

const API = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 5 * 1000,
});

export { API };