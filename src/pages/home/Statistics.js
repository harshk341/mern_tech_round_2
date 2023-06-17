import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "styled-components";

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & h2 {
    color: var(--color-primary);
    line-height: 1.2;

    & + span {
      font-size: 0.9rem;
      margin-left: 1rem;
    }
  }
`;

const Statistics = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="gx-4 gy-3">
            <Col xs={12} md={6} lg={3}>
              <Stats className="stats-info">
                <h2>10,000+</h2>
                <span>Vehicle Owners</span>
              </Stats>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Stats className="stats-info">
                <h2>25,000+</h2>
                <span>Successful Bookings</span>
              </Stats>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Stats className="stats-info">
                <h2>3,000+</h2>
                <span>Satisfied clients</span>
              </Stats>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Stats className="stats-info">
                <h2>70+</h2>
                <span>Cities Covered</span>
              </Stats>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Statistics;
