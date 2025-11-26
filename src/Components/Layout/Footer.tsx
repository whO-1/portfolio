import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="" aria-hidden="true" />
      <Container className="py-4">
        <Row className="d-flex align-items-center flex-md-row-reverse justify-content-center">
          <Col xs={12} md={9} className="text-center text-md-end">
            <nav
              className={`${styles.footerNav} d-flex justify-content-between`}
              aria-label="Footer"
            >
              <div
                style={{ flex: "1 1 auto" }}
                className={`gap-3 d-flex justify-content-center ${styles.navLinks}`}
              >
                <a href="#projects">Portfolio</a>
                <a href="#about">About</a>
                <a href="#experience">Reviews</a>
                <a href="#contact">Contacts</a>
              </div>
              <div className="footer-social mt-2" style={{ flex: "0 0 auto" }}>
                <button
                  className={styles.backToTop}
                  onClick={scrollTop}
                  aria-label="Back to top"
                >
                  ↑
                </button>
              </div>
            </nav>
          </Col>
          <Col xs={12} md={3} className={styles.footerCopy}>
            <p>Dumitru Diocher</p>
            <p>© {year} Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
