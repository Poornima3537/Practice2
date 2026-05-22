import { useState, useEffect } from "react";

import DoctorService from "../services/DoctorService";

import NavbarComponent from "../components/NavbarComponent";
import DoctorCard from "../components/DoctorCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";

function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [speciality, setSpeciality] =
    useState("");

  const [mode, setMode] =
    useState("");

  useEffect(() => {
    const fetchDoctors =
      async () => {
        try {
          const response =
            await DoctorService.getDoctors();

          setDoctors(
            response.data || []
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchDoctors();
  }, []);

  const handleFilter =
    async () => {
      try {
        setLoading(true);

        const response =
          await DoctorService.filterDoctors(
            speciality,
            mode
          );

        setDoctors(
          response.data || []
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <>
      <NavbarComponent />

      <div className="container mt-4">
        <h2 className="page-title">
          Doctors
        </h2>

        <div className="row mb-4">

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Speciality"
              value={speciality}
              onChange={(e) =>
                setSpeciality(
                  e.target.value
                )
              }
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={mode}
              onChange={(e) =>
                setMode(
                  e.target.value
                )
              }
            >
              <option value="">
                All Modes
              </option>

              <option value="ONLINE">
                ONLINE
              </option>

              <option value="OFFLINE">
                OFFLINE
              </option>
            </select>
          </div>

          <div className="col-md-4">
            <button
              className="btn btn-primary w-100"
              onClick={
                handleFilter
              }
            >
              Apply Filter
            </button>
          </div>

        </div>

        {loading ? (
          <LoadingSpinner />
        ) : doctors.length === 0 ? (
          <div className="alert alert-warning">
            No Doctors Found
          </div>
        ) : (
          <div className="row">
            {doctors.map(
              (doctor) => (
                <DoctorCard
                  key={
                    doctor.id
                  }
                  doctor={
                    doctor
                  }
                />
              )
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default DoctorsPage;