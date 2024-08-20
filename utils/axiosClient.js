import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://different-basket-1b92bf9f28.strapiapp.com/api",
});

export default instance;
