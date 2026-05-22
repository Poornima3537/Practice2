import API from "../api/axiosConfig";

const getDashboard = () =>
  API.get("/admin/dashboard");

const getRevenueSummary = () =>
  API.get("/admin/revenue-summary");

const getAllAppointments = () =>
  API.get("/admin/appointments");

export default {
  getDashboard,
  getRevenueSummary,
  getAllAppointments,
};