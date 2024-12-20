import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://confident-eggs-bebf3c295e.strapiapp.com/api",
});

export default instance;
