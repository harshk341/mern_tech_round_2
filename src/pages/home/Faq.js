import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { SectionHead } from "./Work";
import { styled } from "styled-components";
import { Icon } from "./Footer";
import { MdLocationOn } from "react-icons/md";

const FaqHead = styled(SectionHead)`
  margin-bottom: 1.5rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;

  .contact-card {
    min-width: 80%;
    background-color: var(--color-primary);
    color: #fff;
    padding: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > div {
      margin-bottom: 1.5rem;

      span {
        background-color: var(--color-text);
        color: #fff;
      }
    }

    a {
      background-color: var(--color-secondary);
      padding: 1rem 1.5rem;
      display: inline-block;
    }

    @media (min-width: 1200px) {
      margin-left: -100px;
      left: 0;
      transform: translate(0, -50%);
    }
  }
`;

const Faq = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="gx-5 gy-4 gy-lg-0 justify-content-between">
            <Col xs={12} md={12} lg={6} xl={5}>
              <FaqHead>
                <span>FAQ</span>
                <h2>Frequently Asked Questions</h2>
              </FaqHead>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How can I make an online truck booking?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Booking your truck with ReeRoute is very simple. Just add
                      pickup and destination location. Then, select the weight
                      of goods, type, and size of the truck.
                    </p>
                    <p>
                      Our network of truckers will provide you the best prices
                      with highest reliability.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Can I place a booking with multi-point pick up and drop?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Can I cancel my booking? Is there any cancellation fee?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs={12} md={12} lg={6} xl={5}>
              <ContentWrapper>
                <img src="assets/images/trucks.jpg" alt="" />
                <div className="contact-card">
                  <SectionHead>
                    <span>Let’s Talk</span>
                    <h5>You need any help? get free consultation</h5>
                  </SectionHead>
                  <p className="d-flex align-items-center mb-4">
                    <Icon>
                      <MdLocationOn />
                    </Icon>
                    Have Any Questions (00) 112 365 489
                  </p>
                  <a href="#link">Contact Us</a>
                </div>
              </ContentWrapper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Faq;
