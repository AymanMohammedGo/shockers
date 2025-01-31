import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://sacred-prize-4188289da0.strapiapp.com/api",
});

export default instance;
