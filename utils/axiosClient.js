import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://determined-bat-94d48cd643.strapiapp.com/api",
});

export default instance;
