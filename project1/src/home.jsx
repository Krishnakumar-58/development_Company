import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-bg-body-secondary container border-bottom shadow"
      >
        <Container fluid>
          <Navbar.Brand className="fw-bold" href="#">
            Skill
            <span className="text-primary">Manthan </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex gap-5 p-1">
              <Nav.Link className="text-primary fw-bold" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link href="#about">
                About
              </Nav.Link>
              <Nav.Link href="#service">
                Service
              </Nav.Link>
              <Nav.Link  href="#contact">
                Contact
              </Nav.Link>
              <Button className="bg-primary">Get Started</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Nav end */}
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <br />
            <span className="text-primary bg-body-secondary rounded-3 p-1">
              🚀 WE BUILD DIGITAL EXPERIENCES
            </span>{" "}
            <br />
            <br />
            <span className="fs-2 fw-bold">
              Turn Your Ideas Into Powerful{" "}
              <span className="text-primary">Digital Solutions</span>
            </span>{" "}
            <br /> <br />
            <p className="text-secondary">
              We design and develo modern websites,mobile applications and
              software solutions that help businesses grow, innovate <br /> and
              succeed
            </p>
            <Button variant="primary">Srart Your Project → </Button>
            <Button
              variant="ms-3"
              className="border-primary text-primary border-2 ms-3"
            >
              Explore Services
            </Button>
            <br /> <br />
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 p-2">
                      ⭐
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">5+</h5>
                      <small className="text-muted">Years Experience</small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 p-2">
                      💼
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0 ">100+</h5>
                      <small className="text-muted">Projects Delivered</small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 p-2">
                      👥
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">50+</h5>
                      <small className="text-muted">Happy Clients</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className=" m-5 ms-6 rounded shadow p-3 position-absolute">
              <div className="bg-primary d-inline p-2 rounded-5">🌐</div>
              <br /> <br />
              <span className="web">Web Development</span>
              <br />
              <span className="text-secondary text1">Modern & Responsive</span>
            </div>
            <div className="bg-primary h-50 rounded-circle w-50 circle p-3">
              <span className="icon1">↝</span>
              <p className="p1">Innovation</p> <br />
              <span className="p2">Technology that</span>
              <span className="p3"> moves your business</span> <br />
              <span className="p4">forward.</span>
            </div>
            <div className="rounded shadow p-3 position-absolute square">
              <div className="bg-primary d-inline p-2 rounded-5">📱</div>
              <br /> <br />
              <span className="web">App Development</span>
              <br />
              <span className="text-secondary text1">
                Android & Cross
                <br />
                Platform
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* about start */}
      <div className="container pt-5">
        <div className="row">
          <p className="text-primary text-center fw-bold" id="about">ABOUT US</p>
          <div className="col-12 col-lg-4 mb-4">
            <span className="fs-3 fw-bold">
              Technology That Helps Your
              <span className="text-primary"> Business Grow</span>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Button variant="primary">Learn More About Us</Button>

          </div>

          <div className="col-12 col-lg-7">
            <div className="row text-center">
              <div className="col-12 col-sm-6 col-md-4 mb-3">
                <div className="shadow p-3 h-100 rounded">
                  <span className="fs-2 bg-body-secondary rounded-circle">
                    💡
                  </span>{" "}
                  <br /> <br />
                  <span className="fw-bold">Innovation</span> <br />
                  <p className="small text-secondary">
                    We use modern technologies to create smart solutions
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 mb-3">
                <div className="shadow p-3 h-100 rounded">
                  <span className="fs-2 bg-body-secondary rounded-circle">
                    🎯
                  </span>{" "}
                  <br /> <br />
                  <span className="fw-bold">Quality</span> <br />
                  <p className="small text-secondary">
                    We use modern technologies to create smart solutions
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 mb-3">
                <div className="shadow p-3 h-100 rounded">
                  <span className="fs-2 bg-body-secondary rounded-circle">
                    🤝
                  </span>{" "}
                  <br /> <br />
                  <span className="fw-bold">Partnership</span> <br />
                  <p className="small text-secondary">
                    We use modern technologies to create smart solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR SERVICES */}
      <div className="container pt-5">
        <div className="row">
          <p className=" text-center text-primary fw-bold" id="service">OUR SERVICE</p>
          <span className="text-center fw-bolder fs-5">
            Everything You Need To{" "}
            <span className="text-primary">Go Digital</span>{" "}
          </span>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            voluptatibus ratione iure vero tempora <br /> sequi a animi aut ab
            similique, illo qui neque, quidem soluta.
          </p>
          <div className="col-12 col-lg-12">
            <div className="row text-center">
              <div className="col-12 col-sm-6 col-md-3 mb-3">
                <div className="shadow p-3 h-auto rounded d-flex align-items-center">
                  <span className="fs-2 bg-body-secondary rounded-circle mb-5">
                    🌐
                  </span>

                  <p className="small text-secondary p-2">
                    <span className="fw-bold text-dark">Web Development</span>{" "}
                    <br />
                    We use modern technologies to create smart solutions
                    <br />
                    <a className="text-primary text-decoration-none">
                      Learn More→
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3 mb-3">
                <div className="shadow p-3 h-auto rounded d-flex align-items-center">
                  <span className="fs-2 bg-body-secondary rounded-circle mb-5">
                    📱
                  </span>

                  <p className="small text-secondary p-2">
                    <span className="fw-bold text-dark">App Development</span>{" "}
                    <br />
                    We use modern technologies to create smart solutions
                    <br />
                    <a className="text-primary text-decoration-none">
                      Learn More→
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3 mb-3">
                <div className="shadow p-3 h-auto rounded d-flex align-items-center">
                  <span className="fs-2 bg-body-secondary rounded-circle mb-5">
                    🤖
                  </span>

                  <p className="small text-secondary p-2">
                    <span className="fw-bold text-dark">AI Solutions</span>{" "}
                    <br />
                    We use modern technologies to create smart solutions
                    <br />
                    <a className="text-primary text-decoration-none">
                      Learn More→
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mb-3">
                <div className="shadow p-3 h-auto rounded d-flex align-items-center">
                  <span className="fs-2 bg-body-secondary rounded-circle mb-5">
                    🎓
                  </span>

                  <p className="small text-secondary p-2">
                    <span className="fw-bold text-dark">Training & Internship</span>
                    <br />
                    We use modern technologies to create smart solutions
                    <br />
                    <a className="text-primary text-decoration-none">
                      Learn More→
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blue page */}
      <div className="container">
        <div className="row">
          <div className="col-12 shadow bg-primary d-flex flex-wrap justify-content-evenly text-center text-white rounded">

            <span className="border-end p-3 flex-fill">
              <h3>100+</h3>
              <p className="m-0">Projects</p>
            </span>
            <span className="border-end p-3 flex-fill">
              <h3>50+</h3>
              <p className="m-0">Clients</p>
            </span>
            <span className="border-end p-3 flex-fill">
              <h3>5+</h3>
              <p className="m-0">Years Experience</p>
            </span>
            <span className="p-3 flex-fill">
              <h3>10+</h3>
              <p className="m-0">Technologies</p>
            </span>
          </div>
        </div>
      </div>
      {/* Let's work together */}
      <div className="container p-4">
        <div className="row">
          <div className="col-12 col-lg-1 mb-1"></div>
           <div className="col-12 col-lg-6 mb-4">
          <p className="text-primary  fw-bold" id="contact">LET'S WORK TOGETHER</p>
            <span className="fs-3 fw-bold">
              Have an Idea ? <br /> Let's
              <span className="text-primary"> Built It Together.</span>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit to this in thw solutions.</p>
            <Button variant="primary">Contact Us → </Button>
          </div>
           <div className="col-12 col-sm-5 col-md-3">
                <div className="shadow p-4 h-auto rounded text-center">
                  <span className="fs-2 rounded-circle">
                    💬
                  </span>

                  <p className="small text-secondary">
                    <span className="fw-bold fs-5 text-black ">Let's Talk</span>
                    <br />
                    Have a project in mind?                    <br />
                    <a className="text-primary text-decoration-none">
                     ✉️ info@skillmanthan.com
                    </a>
                  </p>
                </div>
              </div>
        </div>
      </div>
      {/* Footer */}
      <div className="container">
        <div className="row bg-dark text-light pt-4">
          <div className="col-12 col-lg-1 mb-1"></div>
          <div className="col-12 col-lg-3 mb-3">
            <span className="fs-4 fw-bold">Skill<span className="text-primary">Manthan</span></span> <br />
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quo blanditiis delectus error, perspiciatis labore quae ducimus.</span>
            <br /> <br />
            <div className="d-flex gap-4">
            <span className="rounded-circle border p-1">✉️</span>
            <span className="rounded-circle border p-1">✉️</span>
            <span className="rounded-circle border p-1">✉️</span>
            <span className="rounded-circle border p-1">✉️</span>
            </div>
          </div>
          <div className="col-12 col-lg-2 mb-2">
            <p className="fw-bold">Quick Links</p>
            <span>home</span> <br />
            <span>About</span> <br />
            <span>Services</span> <br />
            <span>Contact</span>
          </div>
          <div className="col-12 col-lg-2 mb-2">
             <p className="fw-bold">Services</p>
            <span>Web Development</span> <br />
            <span>App Development</span> <br />
            <span>AI Solutions</span> <br />
            <span>Training & Internship</span>
          </div>
          <div className="col-12 col-lg-3 mb-3">
             <p className="fw-bold">Contact Info</p>
            <span>📞 +91 9876543210</span> <br />
            <span>✉️ info@skillmanthan.com</span> <br />
            <span>📍 indore, Madhya Pradesh, India</span> <br />
          </div>
          <div className="col-12 col-lg-1 mb-1"></div>
          
          <p className="text-center">@2026 SkillManthan Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
export default Home;
