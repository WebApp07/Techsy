import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startedYear = 2021;

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              Techsy &copy; {startedYear} - {currentYear}
            </p>
            <p>Contact Us: techsey@proton.me</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
