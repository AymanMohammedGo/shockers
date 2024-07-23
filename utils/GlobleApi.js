import axiosClient from "./axiosClient";
const getName_HeaderLinks = (locale) =>
  axiosClient.get(`/header?locale=${locale}`);
export default getName_HeaderLinks;
