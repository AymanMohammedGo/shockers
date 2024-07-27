import axiosClient from "./axiosClient";
export const getHome = (locale) =>
  axiosClient.get(`/baytuna-home?populate=*&locale=${locale}`);
export const getAboutUS = (locale) =>
  axiosClient.get(`/baytunas?populate=*&locale=${locale}`);
export const getServices = (locale) =>
  axiosClient.get(`/baytuna-services?populate=*&locale=${locale}`);
export const getTopAbout = (locale) =>
  axiosClient.get(`/baytuna-top-about?populate=*&locale=${locale}`);
export const getTopServices = (locale) =>
  axiosClient.get(`/baytuna-top-service?populate=*&locale=${locale}`);
