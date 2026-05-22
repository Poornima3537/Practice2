import API from "../api/axiosConfig";

const getDoctors = () =>
  API.get("/doctors");

const filterDoctors = (
  speciality,
  mode
) =>
  API.get(
    `/doctors?speciality=${speciality}&mode=${mode}`
  );

export default {
  getDoctors,
  filterDoctors,
};