import { Badge } from "react-bootstrap";

function AppointmentCard({
  appointment,
  onCancel,
}) {
  const getStatusColor = () => {
    switch (
      appointment.status
    ) {
      case "CONFIRMED":
        return "success";

      case "CANCELLED":
        return "danger";

      case "COMPLETED":
        return "primary";

      case "NO_SHOW":
        return "warning";

      default:
        return "secondary";
    }
  };

  return (
    <div className="card shadow mb-3">

      <div className="card-body">

        <h5>
          Dr.
          {" "}
          {appointment.doctorName}
        </h5>

        <p>
          <strong>
            Patient:
          </strong>
          {" "}
          {appointment.patientName}
        </p>

        <p>
          <strong>
            Date:
          </strong>
          {" "}
          {appointment.appointmentDate}
        </p>

        <p>
          <strong>
            Time:
          </strong>
          {" "}
          {appointment.appointmentTime}
        </p>

        <p>
          <strong>
            Mode:
          </strong>
          {" "}
          {appointment.mode}
        </p>

        <Badge
          bg={
            getStatusColor()
          }
        >
          {
            appointment.status
          }
        </Badge>

        {appointment.status ===
          "CONFIRMED" && (
          <button
            className="btn btn-danger btn-sm ms-3"
            onClick={() =>
              onCancel(
                appointment.id
              )
            }
          >
            Cancel
          </button>
        )}

      </div>

    </div>
  );
}

export default AppointmentCard;