import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://deserving-nest-46f1c769b0.strapiapp.com/api",
});

export default instance;
