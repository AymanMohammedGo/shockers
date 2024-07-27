import axiosClient from "./axiosClient";
export const getAboutUS = (locale) =>
  axiosClient.get(`/shockers-about-uses?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/shockers-services?populate=*&locale=${locale}`);
