import React from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { styled } from "styled-components";
import { STATES } from "../../constant";
import { Formik } from "formik";
import * as Yup from "yup";

const HeroWrapper = styled.div`
  width: 100%;
  position: relative;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    content: "";
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9) 10%,
      rgba(0, 0, 0, 0.6) 90%
    );
    z-index: 2;
  }
`;

const HeroCarousel = styled(Carousel)`
  width: 100%;

  & .carousel-indicators [data-bs-target] {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 1;
  }
  & .carousel-indicators .active {
    background-color: var(--color-secondary);
  }

  & .carousel-inner {
    width: 100%;
    min-height: 100vh;

    & .carousel-item {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      overflow: hidden;
      z-index: 1;
    }

    @media (min-width: 768px) {
      min-height: 80vh;
    }
  }
`;

const HeroContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  color: #fff;
`;

const FormComponent = styled(Form)`
  background-color: #fff;
  max-width: 380px;
  padding: 1.5rem;
  border-radius: 8px;

  .form-label,
  .form-heading {
    text-align: center;
    color: var(--color-text);
  }

  & button[type="submit"] {
    outline: 0;
    border: 0;
    width: 100%;
    padding: 0.8rem 0;
    color: #fff;
    background-color: var(--color-secondary);
  }
  & button[type="submit"]:active {
    background-color: var(--color-secondary);
  }
`;

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContent className="d-flex align-items-center">
          <Container>
            <Row className="gx-4 gy-4 gy-md-0">
              <Col xs={12} md={6}>
                <p
                  style={{
                    borderLeft: "3px solid var(--color-secondary)",
                    paddingLeft: "10px",
                  }}
                >
                  Streamline Your Logistics with Easy Truck Booking
                </p>
                <h1>ReeRoute: India's Fastest Truck Booking Platform!</h1>
                <ul className="ps-3">
                  <li>Pan-India operations</li>
                  <li>Associated with 10,000+ Vehicle Owners</li>
                  <li>Guaranteed Timely Payments</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <Formik
                  initialValues={{
                    mobile: "",
                    noOfTrucks: "",
                    city: "",
                    message: null,
                  }}
                  validationSchema={Yup.object().shape({
                    mobile: Yup.string()
                      .matches(
                        /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/,
                        "Mobile number is invalid"
                      )
                      .required("Mobile number is required"),
                    noOfTrucks: Yup.string()
                      .matches(/\d+/, "Please enter a number")
                      .required("Please enter a number"),
                    city: Yup.string().required("Please select a city"),
                  })}
                  onSubmit={async (
                    values,
                    { setSubmitting, setFieldValue }
                  ) => {
                    try {
                      const res = await fetch(
                        "http://18.143.242.23:8002/api/trucker/createrequest",
                        {
                          method: "POST",
                          body: JSON.stringify(values),
                          headers: {
                            "Content-Type": "application/json",
                          },
                        }
                      );
                      const data = await res.json();
                      setFieldValue("message", data.message);
                      setSubmitting(false);
                    } catch (error) {
                      console.log(error.message);
                      setSubmitting(false);
                    }
                  }}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                  }) => (
                    <FormComponent onSubmit={handleSubmit}>
                      <h3 className="form-heading mb-4">Onboard Yourself!</h3>
                      <Form.Group
                        className="mb-3"
                        controlId="form.ControlMobile"
                      >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="mobile"
                          placeholder="Enter Mobile No."
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.mobile}
                        />
                        <Form.Text className="text-danger">
                          {touched.mobile && errors.mobile}
                        </Form.Text>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="form.ControlTrucks"
                      >
                        <Form.Label>No. Of Truck</Form.Label>
                        <Form.Control
                          type="text"
                          name="noOfTrucks"
                          placeholder="Enter No."
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.noOfTrucks}
                        />
                        <Form.Text className="text-danger">
                          {touched.noOfTrucks && errors.noOfTrucks}
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="form.ControlCity">
                        <Form.Label>City</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.city}
                          name="city"
                        >
                          <option value="">Select City</option>
                          {STATES.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Text className="text-danger">
                          {touched.city && errors.city}
                        </Form.Text>
                      </Form.Group>
                      <Button disabled={isSubmitting} type="submit">
                        {isSubmitting ? (
                          <Spinner
                            animation="border"
                            size="sm"
                            className="me-2"
                          />
                        ) : null}
                        Submit
                      </Button>
                      {values.message && (
                        <Form.Text muted>{values.message}</Form.Text>
                      )}
                    </FormComponent>
                  )}
                </Formik>
              </Col>
            </Row>
          </Container>
        </HeroContent>
        <HeroCarousel controls={false}>
          <Carousel.Item
            style={{ backgroundImage: "url(assets/images/hero-1.jpg)" }}
            interval={1000}
          />
          <Carousel.Item
            style={{ backgroundImage: "url(assets/images/hero-2.jpg)" }}
            interval={2000}
          />
          <Carousel.Item
            style={{ backgroundImage: "url(assets/images/hero-1.jpg)" }}
            interval={3000}
          />
        </HeroCarousel>
      </HeroWrapper>
    </>
  );
};

export default Hero;
