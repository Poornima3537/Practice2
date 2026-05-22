import API from "../api/axiosConfig";

const bookAppointment = (
  data
) =>
  API.post(
    "/appointments",
    data
  );

const getAppointments =
  () =>
    API.get(
      "/appointments"
    );

const cancelAppointment = (
  id
) =>
  API.put(
    `/appointments/${id}/cancel`
  );

const markCompleted = (
  id
) =>
  API.put(
    `/appointments/${id}/complete`
  );

const markNoShow = (
  id
) =>
  API.put(
    `/appointments/${id}/no-show`
  );

export default {
  bookAppointment,
  getAppointments,
  cancelAppointment,
  markCompleted,
  markNoShow,
};