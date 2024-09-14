import axiosClient from "./axiosClient";
export const getHome = (locale) =>
  axiosClient.get(`/y-marketing-home?populate=*&locale=${locale}`);
export const getAboutUS = (locale) =>
  axiosClient.get(`/y-marketing-about-uses?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/y-marketing-services?populate=*&locale=${locale}`);
export const getSocialMedias = (locale) =>
  axiosClient.get(`/y-marketing-social-medias?locale=${locale}`);
export const getFooter = (locale) =>
  axiosClient.get(`/y-marketing-footer?locale=${locale}`);
export const getContact = (locale) =>
  axiosClient.get(`/y-marketing-contact?locale=${locale}`);
export const getJobOffers = (locale) =>
  axiosClient.get(`/y-marketing-jobs-offers?locale=${locale}`);
export const getProjects = (locale) =>
  axiosClient.get(`/y-marketing-projects?populate=*&locale=${locale}`);
export const getProject = (locale, id) =>
  axiosClient.get(`/y-marketing-projects/${id}?populate=*&locale=${locale}`);
