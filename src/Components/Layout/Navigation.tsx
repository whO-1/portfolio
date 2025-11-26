import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../Layout/Logo";
import ThemeHook from "../Theme/ThemeHook";
import { useState } from "react";
import styles from "./Navigation.module.css";

interface NavigationProps {
  navLinks: { name: string; href: string }[];
  name?: string;
}

const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
  const [show, setShow] = useState(false);
  return (
    <header>
      <Navbar
        expand="lg"
        className="shadow-sm"
        style={{ backgroundColor: "var(--color-primary)" }}
        fixed="top"
      >
        <Container
          fluid
          className="px-4 d-flex align-items-center justify-content-between"
        >
          <Navbar.Brand className="lg-flex-grow-1" href="#">
            <Logo />
          </Navbar.Brand>

          <Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={() => setShow(false)}
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <Offcanvas.Header
              style={{ color: "var(--color-on-primary)" }}
              className="w-100"
            >
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                className="d-flex align-items-center justify-content-between w-100"
              >
                <Logo />
                <XMarkIcon
                  style={{ cursor: "pointer", width: 25, height: 25 }}
                  onClick={() => setShow(false)}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {navLinks.map((item) => (
                  <Nav.Link
                    key={item.name}
                    href={item.href}
                    style={{ color: "var(--color-text-primary)" }}
                    onClick={() => setShow(false)}
                  >
                    {item.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>

          <div className="d-none d-lg-flex lg-flex-grow-1 justify-content-center">
            <Nav className="align-items-center">
              {navLinks.map((item) => (
                <Nav.Link
                  key={item.name}
                  href={item.href}
                  className={`mx-3 ${styles.navLink}`}
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </div>

          <div className="lg-flex-grow-1 d-flex align-items-center">
            <ThemeHook />
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={() => setShow(true)}
              style={{ color: "var(--color-on-primary)", border: "none" }}
              children={
                <Bars3Icon
                  style={{
                    width: 20,
                    height: 20,
                    padding: 0,
                    margin: 0,
                  }}
                  className="d-flex align-items-center justify-content-center"
                  aria-hidden="true"
                />
              }
            />
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
