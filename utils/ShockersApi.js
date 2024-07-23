import axiosClient from "./axiosClient";
const getHeaderLinks = (locale) =>
  axiosClient.get(`/shockers-header-links?locale=${locale}`);
export default getHeaderLinks;
