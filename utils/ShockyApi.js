import axiosClient from "./axiosClient";
export const getHome = (locale) =>
  axiosClient.get(`/shocky-home?populate=*&locale=${locale}`);
export const getAboutUS = (locale) =>
  axiosClient.get(`/shocky-about-uses?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/shocky-services?populate=*&locale=${locale}`);
export const getSocialMedias = (locale) =>
  axiosClient.get(`/shocky-social-medias?locale=${locale}`);
export const getFooter = (locale) =>
  axiosClient.get(`/shocky-footer?locale=${locale}`);
export const getContact = (locale) =>
  axiosClient.get(`/shocky-contact?locale=${locale}`);
export const getJobOffers = (locale) =>
  axiosClient.get(`/shocky-jobs-offers?locale=${locale}`);
export const getSuccess = (locale) =>
  axiosClient.get(`/shocky-success?locale=${locale}`);
export const getHowAdaptive = (locale) =>
  axiosClient.get(`/shocky-how-adaptive?populate=*&locale=${locale}`);
export const getProjects = (locale) =>
  axiosClient.get(`/shocky-project?populate=*&locale=${locale}`);
// export const getProject = (locale, id) =>
//   axiosClient.get(`/y-marketing-projects/${id}?populate=*&locale=${locale}`);
