import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

import DoctorService from "../services/DoctorService";
import AppointmentService from "../services/AppointmentService";

function BookAppointmentPage() {
  const { doctorId } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState(null);

  const [formData, setFormData] = useState({
    patientName: "",
    appointmentDate: "",
    appointmentTime: "",
    mode: "ONLINE",
  });

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response =
          await DoctorService.getDoctors();

        const selectedDoctor =
          response.data.find(
            (doc) =>
              doc.id === Number(doctorId)
          );

        setDoctor(selectedDoctor);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctor();
  }, [doctorId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        doctorId: Number(doctorId),
        ...formData,
      };

      await AppointmentService.bookAppointment(
        payload
      );

      toast.success(
        "Appointment Booked Successfully"
      );

      navigate("/appointments");
    } catch (error) {
      console.error(error);

      toast.error("Booking Failed");
    }
  };

  return (
    <>
      <NavbarComponent />

      <div className="container mt-4">
        <h2>Book Appointment</h2>

        {doctor && (
          <div className="alert alert-info">
            <strong>Doctor:</strong>{" "}
            Dr. {doctor.name}
            <br />
            <strong>Speciality:</strong>{" "}
            {doctor.speciality}
            <br />
            <strong>Mode:</strong>{" "}
            {doctor.mode}
          </div>
        )}

        <form
          className="card p-4 shadow"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label className="form-label">
              Patient Name
            </label>

            <input
              type="text"
              name="patientName"
              className="form-control"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Appointment Date
            </label>

            <input
              type="date"
              name="appointmentDate"
              className="form-control"
              value={
                formData.appointmentDate
              }
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Appointment Time
            </label>

            <input
              type="time"
              name="appointmentTime"
              className="form-control"
              value={
                formData.appointmentTime
              }
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Consultation Mode
            </label>

            <select
              name="mode"
              className="form-select"
              value={formData.mode}
              onChange={handleChange}
            >
              <option value="ONLINE">
                ONLINE
              </option>

              <option value="OFFLINE">
                OFFLINE
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-success"
          >
            Confirm Booking
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default BookAppointmentPage;