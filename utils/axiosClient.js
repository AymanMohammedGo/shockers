import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://methodical-cabbage-84381c3703.strapiapp.com/api",
});

export default instance;
