import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://honest-cat-609834b00b.strapiapp.com/api",
});

export default instance;
