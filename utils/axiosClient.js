import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://honest-frogs-42f114d238.strapiapp.com/api",
});

export default instance;
