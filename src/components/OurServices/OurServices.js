import React from 'react';
import OurServicesImg from './Line.svg';
import './OurServices.css';
import { Col, Row } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const OurServices = () => {
  return (
    <>
      <Row className="OurServices__title">
        <Col
          lg={{ offset: 4, span: 6 }}
          xl={{ offset: 5, span: 6 }}
          md={{ offset: 3, span: 7 }}
          sm={{ offset: 2, span: 9 }}
          className="OurServices__titleCol"
        >
          <h2>Наши Услуги</h2>
          <img src={OurServicesImg} />
        </Col>
      </Row>
      <Row className="OurServices" style={{ width: '100%' }}>
        <Col
          xl={{ span: 3 }}
          lg={{ span: 3 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="OurServices__firstCol"
        >
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce="true">
            <h3>Наши Услуги</h3>
          </ScrollAnimation>
        </Col>

        <Col
          xl={{ offset: 1, span: 3 }}
          lg={{ offset: 1, span: 3 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="OurServices__secondCol"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={200}
          >
            <h3>Наши Услуги</h3>
          </ScrollAnimation>
        </Col>

        <Col
          xl={{ offset: 1, span: 3 }}
          lg={{ offset: 1, span: 3 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="OurServices__thirdCol"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={400}
          >
            <h3>Наши Услуги</h3>
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="OurServices2" style={{ width: '100%' }}>
        <Col
          xl={{ span: 3 }}
          lg={{ span: 3 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="OurServices__firstCol2"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={500}
          >
            <h3>Наши Услуги</h3>
          </ScrollAnimation>
        </Col>

        <Col
          xl={{ offset: 1, span: 3 }}
          lg={{ offset: 1, span: 3 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="OurServices__secondCol2"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={700}
          >
            <h3>Наши Услуги</h3>
          </ScrollAnimation>
        </Col>

        <Col
          xl={{ offset: 1, span: 3 }}
          lg={{ offset: 1, span: 3 }}
          md={{ span: 11 }}
          sm={{ span: 11 }}
          xs={{ span: 12 }}
          className="OurServices__thirdCol2"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce="true"
            delay={900}
          >
            <h3>Наши Услуги</h3>
          </ScrollAnimation>
        </Col>
      </Row>
    </>
  );
};

export default OurServices;
