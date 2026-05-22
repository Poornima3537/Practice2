import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { toast } from "react-toastify";

import AuthService from "../services/AuthService";

function RegisterPage() {
  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      username: "",
      password: "",
      role: "PATIENT",
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
      await AuthService.register(
        formData
      );

      toast.success(
        "Registration Successful"
      );

      navigate("/");
    } catch {
      toast.error(
        "Registration Failed"
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
                Register
              </h2>

              <form
                onSubmit={
                  handleSubmit
                }
              >

                <input
                  type="text"
                  name="username"
                  className="form-control mb-3"
                  placeholder="Username"
                  onChange={
                    handleChange
                  }
                  required
                />

                <input
                  type="password"
                  name="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  onChange={
                    handleChange
                  }
                  required
                />

                <select
                  name="role"
                  className="form-select mb-3"
                  onChange={
                    handleChange
                  }
                >
                  <option value="PATIENT">
                    PATIENT
                  </option>

                  <option value="ADMIN">
                    ADMIN
                  </option>
                </select>

                <button
                  className="btn btn-success w-100"
                >
                  Register
                </button>

              </form>

              <p className="text-center mt-3">

                Already registered?

                <Link
                  to="/"
                  className="ms-2"
                >
                  Login
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RegisterPage;