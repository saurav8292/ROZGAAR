
import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

import './styles/HowWeWork.css';
import img1 from '../Assets/form.png';
import img2 from '../Assets/campaign.png';
import img3 from '../Assets/phone.png';
import img4 from '../Assets/interview.png';




const HowWeWork = () => {
  return (
    <div>
      <Row>
        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4 mb-2">
          <Card style={{ height: 280 }} className="mb-md-4 hvr crd">
            <CardImg className="mid" style={{ width: 70, height: 80 }} src={img1} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">TELL ABOUT YOUR JOB</CardTitle>
              <div className="line"></div>
              <CardSubtitle tag="h6" className="mb-2 mt-2 text-muted middle">Fill a simple form to tell us about yourself and your requirements.</CardSubtitle>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4 mb-2">
          <Card style={{ height: 280 }} className="mb-md-4 hvr crd">
            <CardImg className="mid" style={{ width: 70, height: 80 }} src={img2} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">WE ADVERTISE YOUR JOB</CardTitle>
              <div className="line"></div>
              <CardSubtitle tag="h6" className="mb-2 mt-2 text-muted middle">We publish your job to candidates on Rozgaar App that match your profile.</CardSubtitle>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4">
          <Card style={{ height: 280 }} className="mb-md-4 hvr crd">
            <CardImg className="mid" style={{ width: 70, height: 80 }} src={img3} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">CANDIDATES CALL YOU</CardTitle>
              <div className="line"></div>
              <CardSubtitle tag="h6" className="mb-2 mt-2 text-muted middle">Active job seekers who are interested in your job will call you.</CardSubtitle>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4">
          <Card style={{ height: 280 }} className="mb-md-4 hvr crd">
            <CardImg className="mid" style={{ width: 70, height: 80 }} src={img4} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">TAKE INTERVIEW & HIRE</CardTitle>
              <div className="line"></div>
              <CardSubtitle tag="h6" className="mb-2 mt-2 text-muted middle">From the calls you get, invite relevant people for interview & hire the best ones.</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default HowWeWork;
