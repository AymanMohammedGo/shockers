import axiosClient from "./axiosClient";
export const getHome = (locale) =>
  axiosClient.get(`/deca-home?populate=*&locale=${locale}`);
export const getAboutUS = (locale) =>
  axiosClient.get(`/deca-about-uses?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/deca-services?populate=*&locale=${locale}`);
export const getTopAbout = (locale) =>
  axiosClient.get(`/deca-top-about?populate=*&locale=${locale}`);
export const getSocialMedias = (locale) =>
  axiosClient.get(`/deca-social-medias?locale=${locale}`);
export const getFooter = (locale) =>
  axiosClient.get(`/deca-footer?locale=${locale}`);