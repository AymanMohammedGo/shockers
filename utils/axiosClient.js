import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://glorious-prosperity-1a9651c49e.strapiapp.com/api",
});

export default instance;
