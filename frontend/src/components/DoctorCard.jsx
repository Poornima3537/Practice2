import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100">

        <div className="card-body">

          <h5 className="card-title">
            Dr. {doctor.name}
          </h5>

          <p>
            <strong>Speciality:</strong>{" "}
            {doctor.speciality}
          </p>

          <p>
            <strong>Mode:</strong>{" "}
            {doctor.mode}
          </p>

          <p>
            <strong>Experience:</strong>{" "}
            {doctor.experience} Years
          </p>

          <p>
            <strong>Fees:</strong> ₹
            {doctor.fees}
          </p>

          <p>
            <strong>Availability:</strong>{" "}
            {doctor.availability}
          </p>

          <Link
            to={`/book/${doctor.id}`}
            className="btn btn-primary w-100"
          >
            Book Appointment
          </Link>

        </div>

      </div>
    </div>
  );
}

export default DoctorCard;