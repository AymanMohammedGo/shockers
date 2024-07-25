import axiosClient from "./axiosClient";
const getAboutUS = (locale) =>
  axiosClient.get(`/shockers-about-uses?populate=*&locale=${locale}`);
export default getAboutUS;
