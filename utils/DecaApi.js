import axiosClient from "./axiosClient";
export const getAboutUS = (locale) =>
  axiosClient.get(`/deca-about-uses?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/deca-services?populate=*&locale=${locale}`);