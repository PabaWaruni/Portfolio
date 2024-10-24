import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/rate-watch-project.png";
import projImg2 from "../assets/img/kids-hive-project.jpeg";
import projImg3 from "../assets/img/tourism-project.png";
import projImg4 from "../assets/img/movie-land-project.png";
import projImg5 from "../assets/img/art-board-project.png";
import uiImage1 from "../assets/img/cakes-ui-project.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  //Development Tab
  const devProjects = [
    {
      title: "Rate Watch App",
      description:
        "Finding FD rates of banks in one stop shop; used Android Studio with Java",
      imgUrl: projImg1,
      projectUrl: "https://github.com/PabaWaruni/RateWatchApp",
    },
    {
      title: "Kids Hive Website",
      description:
        "Website for Kids; developed by using PHP,Javascript,CSS,HTML",
      imgUrl: projImg2,
      projectUrl: "https://github.com/https-github-com-Sandeepa200/KidsHive",
    },
    {
      title: "Tourism Website",
      description: "Forntend Development using HTML,CSS,Js",
      imgUrl: projImg3,
      projectUrl:
        "https://github.com/PabaWaruni/Tourism-of-Sri-Lanka/tree/main/Tourism",
    },
    {
      title: "Movie Land Website",
      description:
        "To practised the React.js application with covering the state, hooks, data fetching, and more",
      imgUrl: projImg4,
      projectUrl: "https://github.com/PabaWaruni/Movie-Land",
    },
    {
      title: "Drawing Application",
      description:
        "To my practice, used HTML, CSS, Js and developed the Art Board Application",
      imgUrl: projImg5,
      projectUrl: "https://github.com/PabaWaruni/Drawing-App",
    },
  ];

  //UI/Ux Tab
  const uiProjects = [
    {
      title: "Rate Watch",
      description: "UI design for Rate Watch Mobile Application: Figma",
      imgUrl: projImg1,
      projectUrl:
        "https://embed.figma.com/proto/7pHCpcDdoi10ceNgNAZ4JF/Rate-Watch?node-id=1-3&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&embed-host=share",
    },
    {
      title: "Kids Hive",
      description: "UI design for Kids Hive Website: Figma",
      imgUrl: projImg2,
      projectUrl:
        "https://embed.figma.com/proto/2R7ZRq1sLDsIj6lOkfVw9s/KidsHive-WEB-App?node-id=9-2&node-type=canvas&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A2&embed-host=share",
    },
    {
      title: "Cakes & Bakes",
      description: "UI design for Cakes Business Website: Figma",
      imgUrl: uiImage1,
      projectUrl:
        "https://embed.figma.com/proto/tnM7o2oRqFkHeQd1VVXCyW/Cakes?node-id=16-285&node-type=frame&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A285&show-proto-sidebar=1&embed-host=share",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>
                    A showcase of my work in software development, featuring web
                    and mobile applications. Each project highlights my skills
                    in coding, design, and problem-solving. Click to explore
                    more!
                  </p>
                  <Tab.Container id="devProjects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI/UX</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {devProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {uiProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
