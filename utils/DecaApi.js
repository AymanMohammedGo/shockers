import axiosClient from "./axiosClient";
export const getHome = (locale) =>
  axiosClient.get(`/deca-home?populate=*&locale=${locale}`);
export const getAboutUS = (locale) =>
  axiosClient.get(`/deca-about-uses?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/deca-services?populate=*&locale=${locale}`);
export const getTopAbout = (locale) =>
  axiosClient.get(`/deca-top-about?populate=*&locale=${locale}`);
export const getTopServices = (locale) =>
  axiosClient.get(`/deca-top-service?populate=*&locale=${locale}`);