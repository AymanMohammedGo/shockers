import axiosClient from "./axiosClient";
export const getHome = (locale) =>
  axiosClient.get(`/shockers-home?populate=*&locale=${locale}`);
export const getAboutUS = (locale) =>
  axiosClient.get(`/shockers-about-uses?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/shockers-services?populate=*&locale=${locale}`);
export const getCategoriesProjects = (locale) =>
  axiosClient.get(`/shockers-categories?populate=*&locale=${locale}`);
