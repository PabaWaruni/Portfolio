import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // Track sidebar visibility
  const [activeLink, setActiveLink] = useState("home"); // Track the active link
  const [isMobile, setIsMobile] = useState(false); // Track if the view is mobile

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Detect if the viewport is mobile or tablet size
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for mobile/tablet view
    handleResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setShowSidebar(!showSidebar); // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setShowSidebar(false); // Close sidebar
  };

  const onUpdateActiveLink = (link) => {
    setActiveLink(link); // Update active link when a link is clicked
    setShowSidebar(false); // Close sidebar after clicking a link
  };

  return (
    <Router>
      <Navbar expand="md" className={`${scrolled ? "scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          {/* Conditionally render Toggle and Sidebar for Mobile/Tablet view */}
          {isMobile ? (
            <>
              <button className="custom-toggler" onClick={handleToggle}>
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* Sidebar */}
              <div className={`sidebar ${showSidebar ? "open" : ""}`}>
                <button className="close-btn" onClick={closeSidebar}>
                  &times;
                </button>
                <ul>
                  <li>
                    <a
                      href="#home"
                      onClick={() => onUpdateActiveLink("home")}
                      className={activeLink === "home" ? "active" : ""}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      onClick={() => onUpdateActiveLink("skills")}
                      className={activeLink === "skills" ? "active" : ""}
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      onClick={() => onUpdateActiveLink("projects")}
                      className={activeLink === "projects" ? "active" : ""}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#connect"
                      onClick={() => onUpdateActiveLink("aboutMe")}
                      className={activeLink === "aboutMe" ? "active" : ""}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/uc?export=download&id=1tphcNJnQrnwPjkH-wyFy6FTGu0HPWvbs">
                      <button className="vvd">
                        <span>Download My CV</span>
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            // For Desktop View: Show normal Navbar Links
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#connect"
                className={
                  activeLink === "aboutMe"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("aboutMe")}
              >
                Contact
              </Nav.Link>
              <span className="navbar-text">
                <a href="https://drive.google.com/uc?export=download&id=1tphcNJnQrnwPjkH-wyFy6FTGu0HPWvbs">
                  <button className="vvd">
                    <span>Download My CV</span>
                  </button>
                </a>
              </span>
            </Nav>
          )}
        </Container>
      </Navbar>
    </Router>
  );
};
