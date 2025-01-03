import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://thoughtful-boat-6826f335b9.strapiapp.com/api",
});

export default instance;
