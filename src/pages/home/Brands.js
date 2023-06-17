import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "styled-components";

const BrandSection = styled.section`
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9) 10%,
      rgba(0, 0, 0, 0.6) 90%
    ),
    url("assets/images/footer-img.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Brands = () => {
  return (
    <>
      <BrandSection>
        <Container>
          <Row className="gx-0 justify-content-center">
            <Col className="text-center" xs={12} sm={6} md={4} lg={3}>
              <img src="assets/images/brand-1.png" alt="" />
            </Col>
            <Col className="text-center" xs={12} sm={6} md={4} lg={3}>
              <img src="assets/images/brand-2.png" alt="" />
            </Col>
            <Col className="text-center" xs={12} sm={6} md={4} lg={3}>
              <img src="assets/images/brand-3.png" alt="" />
            </Col>
            <Col className="text-center" xs={12} sm={6} md={4} lg={3}>
              <img src="assets/images/brand-4.png" alt="" />
            </Col>
          </Row>
        </Container>
      </BrandSection>
    </>
  );
};

export default Brands;
