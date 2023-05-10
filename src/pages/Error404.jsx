import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="mt-9">
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-dark">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;
