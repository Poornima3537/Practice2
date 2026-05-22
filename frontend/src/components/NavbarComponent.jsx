import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaUserMd,
  FaCalendarCheck,
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

function NavbarComponent() {
  const navigate =
    useNavigate();

  const { user, logout } =
    useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link
          className="navbar-brand"
          to="/dashboard"
        >
          <FaUserMd />
          {" "}
          Doctor Appointment
        </Link>

        <div className="collapse navbar-collapse show">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/doctors"
              >
                Doctors
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/appointments"
              >
                <FaCalendarCheck />
                {" "}
                Appointments
              </Link>
            </li>

            {user?.role ===
              "ADMIN" && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/admin"
                >
                  Admin
                </Link>
              </li>
            )}

          </ul>

          <span className="text-white me-3">
            {user?.username}
          </span>

          <button
            className="btn btn-danger"
            onClick={
              handleLogout
            }
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;