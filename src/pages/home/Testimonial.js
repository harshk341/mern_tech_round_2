import React from "react";
import { Container } from "react-bootstrap";
import { SectionHead } from "./Work";
import { styled } from "styled-components";

const TestimonialSection = styled(SectionHead)``;

const Testimonial = () => {
  return (
    <>
      <section>
        <Container>
          <TestimonialSection>
            <span>Testimonial</span>
            <h2>What Our Truckers Say</h2>
          </TestimonialSection>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
