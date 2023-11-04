import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });

  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => {
    const reqBody = JSON.stringify({
          email: values.email,
          username: values.firstName,
          password: values.password,
          phone: values.phone
      });

    axios
      .post("https://fakestoreapi.com/users", reqBody) 
      .then(
        (response) => {
          console.log(response.data);
          setRequestResponse({
            textMessage: response.data.message,
            alertClass: "alert alert-success",
          });
          alert("SignUp Successful");
          navigate("/login");
        },
        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => {
        console.log(error);
      });

  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    mobile: Yup.string().required("Mobile is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (

    <div className="container my-5" style={{background:
      "#dee3ea"}}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div className={requestResponse.alertClass} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2>Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-danger">{formik.errors.firstName}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">{formik.errors.password}</small>
                ) : null}
              </div>

              <input
                type="submit"
                value="Register"
                className="btn my-3 btn-block"style={{background:
                  "#427D9D"}}
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already Registered? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default SignUp;
