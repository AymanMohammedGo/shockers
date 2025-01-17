import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://renowned-rainbow-dc8cca6aa3.strapiapp.com/api",
});

export default instance;
