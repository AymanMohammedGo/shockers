import axiosClient from "./axiosClient";
export const getHome = (locale) =>
  axiosClient.get(`/shockers-home?populate=*&locale=${locale}`);
export const getAboutUS = (locale) =>
  axiosClient.get(`/shockers-about-uses?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/shockers-services?populate=*&locale=${locale}`);
export const getCategoriesProjects = (locale) =>
  axiosClient.get(`/shockers-categories?populate=*&locale=${locale}`);
export const getTopAbout = (locale) =>
  axiosClient.get(`/shockers-top-about?populate=*&locale=${locale}`);
export const getSocialMedias = (locale) =>
  axiosClient.get(`/shockers-social-medias?locale=${locale}`);
export const getFooter = (locale) =>
  axiosClient.get(`/shockers-footer?locale=${locale}`);
export const getContact = (locale) =>
  axiosClient.get(`/shockers-contact?locale=${locale}`);
export const getJobOffers = (locale) =>
  axiosClient.get(`/shockers-jobs-offers?locale=${locale}`);
