import React from "react";
import "./LandingPage.css";
import LoginForm from "../LoginForm/LoginForm";

const LandingPage = () => {
  return (
    <div className="container d-flex flex-wrap main">
      <div className="principal-container d-flex justify-content-center align-items-center">
        <div>Rolling Code School</div>
      </div>
      <div className="secondary-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default LandingPage;
