import axiosClient from "./axiosClient";
export const getHome = (locale) =>
  axiosClient.get(`/yard-home?populate=*&locale=${locale}`);
export const getAboutUS = (locale) =>
  axiosClient.get(`/yard-about-uses?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/yard-services?populate=*&locale=${locale}`);
export const getSocialMedias = (locale) =>
  axiosClient.get(`/yard-social-medias?locale=${locale}`);
export const getFooter = (locale) =>
  axiosClient.get(`/yard-footer?locale=${locale}`);
export const getContact = (locale) =>
  axiosClient.get(`/yard-contact?locale=${locale}`);
export const getJobOffers = (locale) =>
  axiosClient.get(`/yard-jobs-offers?locale=${locale}`);
export const getProjects = (locale) =>
  axiosClient.get(`/yard-projects?populate=*&locale=${locale}`);
export const getProject = (locale, id) =>
  axiosClient.get(`/yard-projects/${id}?populate=*&locale=${locale}`);
