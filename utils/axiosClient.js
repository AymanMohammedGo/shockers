import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://charming-dog-089ee8414f.strapiapp.com/api",
});

export default instance;
