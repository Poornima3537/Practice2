import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import AppointmentCard from "../components/AppointmentCard";
import AppointmentService from "../services/AppointmentService";
import LoadingSpinner from "../components/LoadingSpinner";

function AppointmentsPage() {
  const [appointments, setAppointments] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchAppointments =
      async () => {
        try {
          const response =
            await AppointmentService.getAppointments();

          setAppointments(
            response.data || []
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchAppointments();
  }, []);

  const handleCancel =
    async (id) => {
      try {
        await AppointmentService.cancelAppointment(
          id
        );

        toast.success(
          "Appointment Cancelled"
        );

        const response =
          await AppointmentService.getAppointments();

        setAppointments(
          response.data || []
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Cancellation Failed"
        );
      }
    };

  return (
    <>
      <NavbarComponent />

      <div className="container mt-4">
        <h2 className="page-title">
          My Appointments
        </h2>

        {loading ? (
          <LoadingSpinner />
        ) : appointments.length ===
          0 ? (
          <div className="alert alert-warning">
            No Appointments Found
          </div>
        ) : (
          appointments.map(
            (appointment) => (
              <AppointmentCard
                key={
                  appointment.id
                }
                appointment={
                  appointment
                }
                onCancel={
                  handleCancel
                }
              />
            )
          )
        )}
      </div>

      <Footer />
    </>
  );
}

export default AppointmentsPage;