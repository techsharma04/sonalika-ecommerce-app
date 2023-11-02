import axios from "axios";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import * as Yup from 'yup';

const Login = () => {

  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = (values) => {
    axios
      .post("https://fakestoreapi.com/auth/login", values) 
      .then(
        (response) => {
          alert("Login Successful");
          navigate("/");
        },
        (error) => {
          alert("Login Unsuccessful");
        }
      )
      .catch((error) => {
        console.log(error);
      });

  };


  const validationSchema = Yup.object({
    username: Yup.string().required("user name is required"),
    password: Yup.string().required("Password is required")
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
            <h2>Login</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className={
                    formik.touched.username && formik.errors.username
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username ? (
                  <small className="text-danger">{formik.errors.username}</small>
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
                value="Login"
                className="btn btn-dark my-3  mx-auto" 
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center ">
              Don't have an account? <Link to="/signup">SignUp</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Login;

