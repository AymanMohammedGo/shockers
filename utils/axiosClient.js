import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://impressive-heart-a54f8c4027.strapiapp.com/api",
});

export default instance;
