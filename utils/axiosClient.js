import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://authentic-fitness-6ed0fb2a70.strapiapp.com/api",
});

export default instance;
