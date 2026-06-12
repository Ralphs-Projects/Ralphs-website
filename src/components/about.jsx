import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skillCategories: [
        {
          title: "Languages",
          className: "tag--lang",
          skills: ["JavaScript (ES6+)", "Python", "C#", "HTML5", "CSS3"],
        },
        {
          title: "Frameworks & Libraries",
          className: "tag--fw",
          skills: ["React.js", "Node.js (Express)", "Unity (VR)"],
        },
        {
          title: "Databases",
          className: "tag--db",
          skills: ["MongoDB", "SQL"],
        },
        {
          title: "Dev Tools",
          className: "tag--tool",
          skills: ["Git & GitHub", "Docker", "Postman", "RESTful APIs"],
        },
        {
          title: "Digital & Creative",
          className: "tag--dig",
          skills: [
            "Technical Writing",
            "Usability Testing",
            "Canva",
            "Responsive UI Design",
          ],
        },
      ],

      aboutMeData: [
        {
          id: "first-p-about",
          title: "Frontend Developer",
          content:
            "I craft responsive, intuitive interfaces using JavaScript, React, and modern UI frameworks. My focus is on writing clean code that translates into smooth, engaging experiences across all devices — because good design should feel effortless to the people using it.",
        },
        {
          id: "second-p-about",
          title: "Backend Developer",
          content:
            "On the server side, I build secure, scalable applications using Node.js and MongoDB. From architecting RESTful APIs to optimizing database performance, I focus on creating reliable systems that power seamless frontend experiences.",
        },
        {
          id: "third-p-about",
          title: "Technical Writer",
          content:
            "I bridge the gap between complex technology and the people who use it. Whether it's API documentation, developer guides, or user manuals, I write with clarity and precision — making technical concepts accessible without sacrificing depth.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">

                  {/* Left column — photo + skills */}
                  <div className="col-md-6">

                    {/* Skills & Tools */}
                    <div className="skill-mf" style={{ marginTop: "1.5rem" }}>
                      <h6
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "1rem",
                          color: "#555",
                        }}
                      >
                        Skills &amp; Tools
                      </h6>

                      {this.state.skillCategories.map((cat) => (
                        <div key={cat.title} style={{ marginBottom: "1rem" }}>
                          <p
                            style={{
                              fontSize: "11px",
                              fontWeight: "500",
                              textTransform: "uppercase",
                              letterSpacing: "0.09em",
                              color: "#888",
                              margin: "0 0 6px",
                            }}
                          >
                            {cat.title}
                          </p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            {cat.skills.map((skill) => (
                              <span
                                key={skill}
                                className={`skills-tag ${cat.className}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right column — about me text */}
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.aboutMeData.map((content) => (
                        <div key={content.id}>
                          <h6
                            className="title-left"
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                          >
                            {content.title}
                          </h6>
                          <p className="lead">{content.content}</p>
                        </div>
                      ))}
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

export default About;
