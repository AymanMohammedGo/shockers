import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://tidy-broccoli-4a87d47a3b.strapiapp.com/api",
});

export default instance;
