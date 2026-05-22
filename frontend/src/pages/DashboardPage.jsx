import NavbarComponent from "../components/NavbarComponent";

import Footer from "../components/Footer";

import { useAuth } from "../context/AuthContext";

function DashboardPage() {
  const { user } =
    useAuth();

  return (
    <>
      <NavbarComponent />

      <div className="container mt-4">

        <h2 className="page-title">
          Welcome,
          {" "}
          {user?.username}
        </h2>

        <div className="row">

          <div className="col-md-4">

            <div className="card dashboard-card p-4">

              <h4>
                Browse Doctors
              </h4>

              <p>
                Search doctors
                based on speciality
                and consultation mode.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card dashboard-card p-4">

              <h4>
                Book Appointment
              </h4>

              <p>
                Schedule online or
                offline consultations.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card dashboard-card p-4">

              <h4>
                View History
              </h4>

              <p>
                Track all previous
                appointments.
              </p>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default DashboardPage;