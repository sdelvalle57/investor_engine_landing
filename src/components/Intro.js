import React from "react";
import Fondo from "../images/adults-analysis-brainstorming-1661004.jpg";
import Bottom from "../images/flecha abajo-02.svg";
import "../css/main.css";

import {LANDING_GET_UPDATES_PATH} from '../helpers/constants';
import { validateEmail } from "../helpers/validators";
import { getElementByChild, pushToFirebase } from "../helpers/db_services";


function Intro() {
  const [submission, setSubmission] = React.useState({
    submitted: false,
    error: false,
    message: ""
  });

  const [data, setData] = React.useState({
    email: {
      value: "",
      error: false
    }
  });

  const setDataValues = (name, value) => {
    setData({
      ...data,
      [name]: {
        ...[name].error,
        value
      }
    });
  };

  const setSubmissionSuccessful = () => {
    setSubmission({
      submitted: true,
      error: false,
      message: "Submitted"
    });
  }

  const submit = async e => {
    e.preventDefault();
    const error = !validateEmail(data.email.value.trim());
    setData({
      email: {
        value: data.email.value,
        error: !validateEmail(data.email.value.trim())
      }
    });
    setSubmission({
      submitted: false,
      error: false,
      message: ""
    });
    if (error) return;
    const dataExists = await getElementByChild(LANDING_GET_UPDATES_PATH, "email", data.email.value);
    if(!dataExists.error && !dataExists.res.exists()) {
      const saveData = await pushToFirebase(LANDING_GET_UPDATES_PATH, {
        email: data.email.value
      });

      if (!saveData.error) {
        setSubmissionSuccessful()
       
      } else {
        setSubmission({
          submitted: true,
          error: true,
          message:
            "There was an error trying to submit the form, please try again later"
        });
      }
    } else {
      setSubmissionSuccessful()
    }
  };

  return (
    <React.Fragment>
      <div className="view jarallax">
        <img alt="" src={Fondo} className="jarallax-img" />
        <div className="mask rgba-indigo-lighten-1 text-white">
          <div className="flex-center pb-0 mb-5 mt-5">
            <div className="text-center col-12 col-md-9 col-lg-7 ">
              <h1
                className="h1-responsive font-weight-bold mb-3 wow fadeInDown"
                data-wow-delay="0.6s"
              >
                Solving the Funding Issue
              </h1>
              <p
                className="font-weight-bolder mb-3 wow fadeInLeft"
                data-wow-delay="0.7s"
              >
                The kickstarter of Web3, raise funds, and use holochain to track
                the impact and return of your investments all powered by{" "}
                <a
                  href="https://github.com/holo-rea/"
                  className="text-white font-weight-bolder"
                  style={{ textDecoration: `underline` }}
                >
                  HoloREA
                </a>
              </p>
              <button
                className="btn btn-outline-white mb-5 wow fadeInUp"
                data-wow-delay="0.8s"
                data-toggle="modal"
                data-target="#modalLRForm"
              >
                Get Updates
              </button>
            </div>
            <div
              className="position-absolute col-6 col-sm-4 col-md-3"
              style={{ bottom: `0` }}
            >
              <a data-scroll href="#footer" style={{ outline: "none" }}>
                <img src={Bottom} className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalLRForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog cascading-modal" role="document">
          <div className="modal-content">
            <div className="modal-c-tabs">
              <ul
                className="nav nav-tabs md-tabs tabs-2 bg-indigo-lighten-1"
                role="tablist"
              >
                <li className="nav-item">
                  <a className="nav-link text-white" data-toggle="tab">
                    <i className="fas fa-bell"></i>
                    Get Updates
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane fade in show active">
                  <div className="modal-body mb-1">
                    <div className="md-form mb-3">
                      <i className="fas fa-envelope prefix prefix-indigo-lighten-1"></i>
                      <input
                        type="email"
                        value={data.email.value}
                        id="modalLRInput10"
                        onChange= {({target}) => setDataValues("email", target.value)}
                        className="form-control form-control-sm validate input-indigo-lighten-1"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="modalLRInput10"
                      >
                        Your email
                      </label>
                    </div>

                    <div className="text-center ">
                    {!submission.error && submission.submitted?
                       <i className="fas fa-check-circle ml-1 success"></i>:
                        <button
                          className="btn btn-indigo-lighten-1"
                          onClick={submit}
                          type="button">GET<i className="fas fa-sign-in ml-1"></i>
                      </button>
                    }
                      
                    </div>
                  </div>
                </div>
              </div>
              {submission.error && submission.submitted?
                  <div class="alert alert-danger" role="alert">
                      {submission.message}
                  </div>:null
              }

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Intro;
