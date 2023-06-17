import React from "react";
import { Container } from "react-bootstrap";
import { styled } from "styled-components";

export const SectionHead = styled.div`
  margin-bottom: 3.5rem;

  span {
    padding: 5px 12px;
    display: inline-block;
    border-left: 5px solid var(--color-secondary);
    color: var(--color-primary);
    background-color: #f4f4f4;
    margin-bottom: 0.8rem;
  }

  h2 {
    line-height: 1.5;
    color: var(--color-primary);
  }
`;

const Work = () => {
  return (
    <section>
      <Container>
        <SectionHead>
          <span>How it works</span>
          <h2>How Reroute works</h2>
          <p>
            With Reeroute, experience the perfect blend of reliability and
            convenience in your transportation needs.
          </p>
        </SectionHead>
        <img src="assets/images/work-cycle.png" alt="" />
      </Container>
    </section>
  );
};

export default Work;
