import axiosClient from "./axiosClient";
export const getAboutUS = (locale) =>
  axiosClient.get(`/baytunas?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/baytuna-services?populate=*&locale=${locale}`);