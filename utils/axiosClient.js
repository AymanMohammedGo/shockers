import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://accessible-diamond-a319686928.strapiapp.com/api",
});

export default instance;
