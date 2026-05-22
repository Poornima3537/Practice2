import { useEffect, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import AdminService from "../services/AdminService";

function AdminDashboardPage() {
  const [dashboard, setDashboard] = useState({
    totalDoctors: 0,
    totalAppointments: 0,
    completedAppointments: 0,
    totalRevenue: 0,
  });

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      AdminService.getDashboard(),
      AdminService.getAllAppointments(),
    ])
      .then(([dashboardRes, appointmentRes]) => {
        setDashboard(dashboardRes.data || {});
        setAppointments(appointmentRes.data || []);
      })
      .catch((error) => {
        console.error(
          "Dashboard Load Error:",
          error
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <NavbarComponent />

      <div className="container mt-4">
        <h2 className="page-title">
          Admin Dashboard
        </h2>

        <div className="row mb-4">
          <div className="col-md-3">
            <div className="dashboard-card p-4 text-center">
              <h3>
                {dashboard.totalDoctors}
              </h3>
              <p>Total Doctors</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card p-4 text-center">
              <h3>
                {dashboard.totalAppointments}
              </h3>
              <p>Total Appointments</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card p-4 text-center">
              <h3>
                {
                  dashboard.completedAppointments
                }
              </h3>
              <p>Completed</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dashboard-card p-4 text-center">
              <h3>
                ₹
                {dashboard.totalRevenue}
              </h3>
              <p>Total Revenue</p>
            </div>
          </div>
        </div>

        <div className="card shadow">
          <div className="card-header">
            Recent Appointments
          </div>

          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Doctor</th>
                  <th>Patient</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Mode</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments.length >
                0 ? (
                  appointments.map(
                    (appointment) => (
                      <tr
                        key={
                          appointment.id
                        }
                      >
                        <td>
                          {
                            appointment.id
                          }
                        </td>

                        <td>
                          {appointment.doctorName ||
                            "-"}
                        </td>

                        <td>
                          {appointment.patientName ||
                            "-"}
                        </td>

                        <td>
                          {appointment.appointmentDate ||
                            "-"}
                        </td>

                        <td>
                          {appointment.appointmentTime ||
                            "-"}
                        </td>

                        <td>
                          {appointment.mode ||
                            "-"}
                        </td>

                        <td>
                          <span
                            className={`badge ${
                              appointment.status ===
                              "CONFIRMED"
                                ? "bg-success"
                                : appointment.status ===
                                  "CANCELLED"
                                ? "bg-danger"
                                : appointment.status ===
                                  "COMPLETED"
                                ? "bg-primary"
                                : "bg-warning"
                            }`}
                          >
                            {
                              appointment.status
                            }
                          </span>
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center"
                    >
                      No Appointments Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminDashboardPage;