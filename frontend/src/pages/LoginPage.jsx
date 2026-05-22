import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { toast } from "react-toastify";

import AuthService from "../services/AuthService";

import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [formData, setFormData] =
    useState({
      username: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      const response =
        await AuthService.login(
          formData
        );

      const {
        token,
        user,
      } = response.data;

      login(user, token);

      toast.success(
        "Login Successful"
      );

      if (
        user.role === "ADMIN"
      ) {
        navigate("/admin");
      } else {
        navigate(
          "/dashboard"
        );
      }
    } catch (error) {
      toast.error(
        "Invalid Credentials"
      );
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-body">

              <h2 className="text-center mb-4">
                Login
              </h2>

              <form
                onSubmit={
                  handleSubmit
                }
              >

                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control mb-3"
                  onChange={
                    handleChange
                  }
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control mb-3"
                  onChange={
                    handleChange
                  }
                  required
                />

                <button
                  className="btn btn-primary w-100"
                >
                  Login
                </button>

              </form>

              <p className="mt-3 text-center">

                Don't have an account?

                <Link
                  to="/register"
                  className="ms-2"
                >
                  Register
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;