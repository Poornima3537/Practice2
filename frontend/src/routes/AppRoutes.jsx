import {
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import DoctorsPage from "../pages/DoctorsPage";
import BookAppointmentPage from "../pages/BookAppointmentPage";
import AppointmentsPage from "../pages/AppointmentsPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import NotFoundPage from "../pages/NotFoundPage";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={
          <RegisterPage />
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctors"
        element={
          <ProtectedRoute>
            <DoctorsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/book/:doctorId"
        element={
          <ProtectedRoute>
            <BookAppointmentPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/appointments"
        element={
          <ProtectedRoute>
            <AppointmentsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="ADMIN">
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/unauthorized"
        element={
          <UnauthorizedPage />
        }
      />

      <Route
        path="*"
        element={
          <NotFoundPage />
        }
      />

    </Routes>
  );
}

export default AppRoutes;