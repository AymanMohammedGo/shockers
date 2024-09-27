import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://original-bubble-c776909aaf.strapiapp.com/api",
});

export default instance;
