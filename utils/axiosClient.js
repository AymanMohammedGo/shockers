import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://inviting-freedom-08306e638f.strapiapp.com/api",
});

export default instance;
