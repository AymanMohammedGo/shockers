import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://creative-chickens-a26860dbb3.strapiapp.com/api",
});

export default instance;
