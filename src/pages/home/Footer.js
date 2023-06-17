import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdCall, MdLocationOn, MdMail } from "react-icons/md";

const StyledFooter = styled.section`
  background-color: var(--color-primary);
  color: #fff;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.8rem;
      color: #fff;

      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

const IconList = styled.ul`
  display: flex;

  .icon-item {
    margin-bottom: 0;
    margin-right: 1.5rem;

    a {
      font-size: 1.8rem;
    }
  }
`;

const FooterExtra = styled.div`
  background-color: var(--color-primary);
  border-top: 1px solid var(--color-text);
  text-align: center;
  padding: 1rem 0;

  p {
    margin: 0;
    color: #fff;
  }
`;

export const Icon = styled.span`
  display: inline-block;
  min-width: 48px;
  height: 48px;
  background-color: var(--color-secondary);
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border-radius: 50%;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container>
          <Row className="gx-3 gy-3">
            <Col xs={12} md={6} lg={3}>
              <a href="#home">
                <img className="mb-3" src="assets/images/logo.png" alt="" />
              </a>
              <p>Reeroute: India's Fastest Truck Booking Platform!</p>
              <h5 className="mt-4">Follow us on</h5>
              <IconList>
                <li className="icon-item">
                  <a href="#link">
                    <FaInstagram />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#link">
                    <FaFacebook />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#link">
                    <FaTwitter />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#link">
                    <FaLinkedin />
                  </a>
                </li>
              </IconList>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <ul>
                <li>
                  <a href="#link">About Us</a>
                </li>
                <li>
                  <a href="#link">How it Works</a>
                </li>
                <li>
                  <a href="#link">Download App</a>
                </li>
                <li>
                  <a href="#link">Contact</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={2}>
              <ul>
                <li>
                  <a href="#link">Careers</a>
                </li>
                <li>
                  <a href="#link">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#link">Privacy Policy</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ul>
                <li className="d-flex align-items-center">
                  <Icon>
                    <MdMail />
                  </Icon>
                  <p>
                    Email
                    <br />
                    <a href="mailto:contact@logistics.com">
                      contact@logistics.com
                    </a>
                  </p>
                </li>
                <li className="d-flex align-items-center">
                  <Icon>
                    <MdCall />
                  </Icon>
                  <p>
                    Call Us <br />
                    <a href="tel:+(00) 112 365 489">(00) 112 365 489</a>
                  </p>
                </li>
                <li className="d-flex align-items-center">
                  <Icon>
                    <MdLocationOn />
                  </Icon>
                  <p>
                    Address
                    <br />
                    B-606, sector - 12, Kharghar, Navi mumbai - 400706
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </StyledFooter>
      <FooterExtra>
        <p>Copyright &#169; ReeRoute | Designed by Jethi Tech</p>
      </FooterExtra>
    </>
  );
};

export default Footer;
