import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://charming-chickens-71cb06af3e.strapiapp.com/api",
});

export default instance;
