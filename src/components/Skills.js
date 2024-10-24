import "react-multi-carousel/lib/styles.css";
import React from "react";

export const Skills = () => {
  const skillsData = [
    { name: "Java", percentage: 65 },
    { name: "Python", percentage: 60 },
    { name: "C", percentage: 60 },
    { name: "HTML/CSS", percentage: 85 },
    { name: "ReactJs", percentage: 60 },
    { name: "Javascript", percentage: 65 },
    { name: "MySQL", percentage: 70 },
    { name: "PHP", percentage: 70 },
    { name: "UI/UX", percentage: 80 },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I am an enthusiastic and dedicated third-year Software
                Engineering undergraduate at The Open University of Sri Lanka,
                seeking an internship to leverage my skills in mobile and web
                application development. <br></br>I have a strong foundation in
                various Programming languages,along with experience in database
                management using MySQL and UI/UX Design.
                <br></br>
                <br></br>I possess essential soft skills such as
                problem-solving, critical thinking, and effective communication,
                enabling me to work collaboratively in team settings. With a
                proactive and responsible approach, I am committed to delivering
                high-quality results and contributing positively to any
                organization I join.
              </p>

              <div className="skills-container">
                {skillsData.map((skill, index) => (
                  <div className="skill-row" key={index}>
                    <h5>{skill.name}</h5>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{
                          width: `${skill.percentage}%`,
                        }}
                      >
                        <span>{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
