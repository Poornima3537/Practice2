import {
  Link,
} from "react-router-dom";

function UnauthorizedPage() {
  return (
    <div className="container text-center mt-5">

      <h1 className="text-danger">
        403
      </h1>

      <h3>
        Unauthorized Access
      </h3>

      <p>
        You don't have permission
        to access this page.
      </p>

      <Link
        to="/dashboard"
        className="btn btn-primary"
      >
        Back To Dashboard
      </Link>

    </div>
  );
}

export default UnauthorizedPage;