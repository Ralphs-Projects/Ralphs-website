import React from "react";
import diplomaIcon from "../img/diploma_855566.png"; 
import diplomaIcon2 from "../img/diploma_354647.png"; 

class Education extends React.Component {
  render() {
    return (
      <section id="education" className="education-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  {/* Education Title */}
                  <div className="col-12">
                    <div className="title-box-2">
                      <h5 className="title-left">Education</h5>
                    </div>
                  </div>

                  {/* Education Content */}
                  <div className="col-md-6">
                    <div className="education-info">
                      {/* Degree & University Information */}
                      <div className="degree-details">
                        <img
                          src={diplomaIcon}
                          alt="Diploma Icon"
                          className="education-icon"
                        />
                        <div className="education-text">
                          <h6>Bachelors in Computer Science</h6>
                          <p>
                            Completed at <strong>Namibian University of Science and Technology</strong> (NUST)
                          </p>
                          <p>
                            Specialization: Software Development | Course highlights are Software design and Project management.
                          </p>
                        </div>
                      </div>

                      {/* Additional Qualifications */}
                      <div className="qualification-details">
                        <h6>Additional Certifications</h6>
                        <ul>
                          <li>Diploma in Real time computing - Aalborg University</li>
                          <li>Google Certificate: Foundations of Project Management</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Honors Degree in Progress */}
                  <div className="col-md-6">
                    <div className="education-info">
                      {/* Degree & University Information - Honors */}
                      <div className="degree-details">
                        <img
                          src={diplomaIcon2}
                          alt="Diploma Icon"
                          className="education-icon"
                        />
                        <div className="education-text">
                          <h6>Honours in Computer Science</h6>
                          <p>
                            Completed at <strong>Namibian University of Science and Technology</strong> (NUST)
                          </p>
                          <p>
                            Focus: Advanced Software Development | Emerging technologies and Secure Systems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
