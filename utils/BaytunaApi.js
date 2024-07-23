import axiosClient from "./axiosClient";
const getHeaderLinks = (locale) =>
  axiosClient.get(`/baytuna-header-links?locale=${locale}`);
export default getHeaderLinks;
