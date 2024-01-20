import axios from "axios";

const productAPI = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 5 * 1000,
});

export { productAPI };