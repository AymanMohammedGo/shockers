import axiosClient from "./axiosClient";
export const getHome = (locale) =>
  axiosClient.get(`/baytuna-home?populate=*&locale=${locale}`);
export const getAboutUS = (locale) =>
  axiosClient.get(`/baytunas?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/baytuna-services?populate=*&locale=${locale}`);
export const getTopAbout = (locale) =>
  axiosClient.get(`/baytuna-top-about?populate=*&locale=${locale}`);
export const getSocialMedias = (locale) =>
  axiosClient.get(`/baytuna-social-medias?locale=${locale}`);
export const getFooter = (locale) =>
  axiosClient.get(`/baytuna-footer?locale=${locale}`);
export const getContact = (locale) =>
  axiosClient.get(`/baytuna-contact?locale=${locale}`);
export const getJobOffers = (locale) =>
  axiosClient.get(`/baytuna-jobs-offers?locale=${locale}`);
