import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import styles from '../styles/Nav.module.css';

const Navi = () => {
  const router = useRouter();
  const [bgBlack, setBgBlack] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBgBlack(true);
      } else {
        setBgBlack(false);
      }
    })
  }, []);

  return (

    <Container>
      <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" className={bgBlack ? styles.navBlack : ''}>
        <Link href="/" passHref>
          <Navbar.Brand>
            <img
              src="/logo.png"
              width="300"
              className="d-inline-block align-top"
              alt="Loadhitch logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              href="/"
              passHref
              className={router.pathname == "/" ? "active" : ""}
            >
              <Nav.Link as="a" href="/">
                Home
              </Nav.Link>
            </Link>
            {/* <Link
              href="/pricing"
              passHref
              className={router.pathname == "/pricing" ? "active" : ""}
            >
              <Nav.Link as="a" href="/pricing">
                Pricing
              </Nav.Link>
            </Link> */}
            <NavDropdown title="" id="collasible-nav-dropdown">
              <Link
                href="/services"
                passHref
                className={router.pathname == "/services" ? "active" : ""}
              >
                <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              </Link>
              <Link
                href="/careers"
                passHref
                className={router.pathname == "/careers" ? "active" : ""}
              >
                <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
              </Link>
              <Link
                href="/about"
                passHref
                className={router.pathname == "/about" ? "active" : ""}
              >
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link
              href="/register"
              passHref
              className={router.pathname == "/register" ? "active" : ""}
            >
              <Nav.Link href="/register">Sign up</Nav.Link>
            </Link>
            <Link
              href="/login"
              passHref
              className={router.pathname == "/login" ? "active" : ""}
            >
              <Nav.Link eventKey={2} href="/login">
                Sign in
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>

  );
};

export default Navi;
