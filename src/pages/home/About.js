import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "styled-components";

const StyledSection = styled.section`
  background-color: #f4f4f4;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 1.5rem;

      h4 {
        color: var(--color-primary);
      }
    }
  }
`;

const About = () => {
  return (
    <>
      <StyledSection>
        <Container>
          <Row className="gx-4 gy-3 gy-md-0 align-items-center">
            <Col xs={12} md={6}>
              <img src="assets/images/phone.png" alt="" />
            </Col>
            <Col xs={12} md={6}>
              <ul>
                <li>
                  <h4>Choose Your Own Load</h4>
                  <p>
                    Take control of your workload with our interactive "Choose
                    Your Own Load" feature. Select the type of load and city
                    based on real-time truck availability.
                  </p>
                </li>
                <li>
                  <h4>Timely Payments</h4>
                  <p>
                    Experience the power of interactive payments. With ReeRoute,
                    Get advance payment in 2 hours after loading and balance
                    within 24 hours upon proof of delivery.
                  </p>
                </li>
                <li>
                  <h4>Manage Bookings Seamlessly</h4>
                  <p>
                    Seamlessly manage your bookings and payment details with our
                    interactive platform. Say goodbye to paperwork and scattered
                    information
                  </p>
                </li>
              </ul>
              <div className="mt-5">
                <h5 className="mb-3">Download Trucker App</h5>
                <a href="#gplay">
                  <img src="assets/images/gplay-btn.png" alt="" />
                </a>
                <a href="#appstore">
                  <img src="assets/images/app-store-btn.png" alt="" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </>
  );
};

export default About;
