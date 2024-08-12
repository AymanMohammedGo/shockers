import axiosClient from "./axiosClient";
export const getName_HeaderLinks = (locale) =>
  axiosClient.get(`/header?locale=${locale}`);
export const getName_Solgan = (locale) =>
  axiosClient.get(`/solgan-for-brand?locale=${locale}`);
export const getDetail_project = (locale) =>
  axiosClient.get(`/detail-project?locale=${locale}`);
