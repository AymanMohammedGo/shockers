import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://sincere-basketball-dd4a6aa83b.strapiapp.com/api",
});

export default instance;
