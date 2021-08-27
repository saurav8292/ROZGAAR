
import React from 'react';
import {
  Card, CardImg, CardBody,
  Col, Row
} from 'reactstrap';
import './styles/JobCategories.css';
import driver from '../Assets/taxiDriver.png';
import deliveryboy from '../Assets/deliveryBoy.png';
import fieldsales from '../Assets/fieldSales.png';
import receptionist from '../Assets/receptionist.png';
import cook from '../Assets/cook.png';
import maid from '../Assets/maid.png';
import mason from '../Assets/bricklayer.png';
import securityguard from '../Assets/securityGuard.png';

const JobCategories = () => {
  return (
    <div>
      <Row>
        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4">
          <Card className="hvr mb-md-4 crd">
            <CardImg className="mid" src={driver} style={{ width: 70, height: 80 }} alt="Card image cap" />
            <CardBody className="mid">
              <div className="font">DRIVER</div>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4">
          <Card className="hvr mb-md-4 crd">
            <CardImg className="mid" src={deliveryboy} style={{ width: 70, height: 80 }} alt="Card image cap" />
            <CardBody className="mid">
              <div className="font">DELIVERY BOY</div>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4">
          <Card className="hvr mb-md-4 crd">
            <CardImg className="mid" src={fieldsales} style={{ width: 70, height: 80 }} alt="Card image cap" />
            <CardBody className="mid">
              <div className="font">FIELD SALES</div>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4">
          <Card className="hvr mb-md-4 crd">
            <CardImg className="mid" src={receptionist} style={{ width: 70, height: 80 }} alt="Card image cap" />
            <CardBody className="mid">
              <div className="font">RECEPTIONIST</div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4">
          <Card className="hvr mb-md-4 crd">
            <CardImg className="mid" src={cook} style={{ width: 70, height: 80 }} alt="Card image cap" />
            <CardBody className="mid">
              <div className="font">COOK</div>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4">
          <Card className="hvr mb-md-4 crd">
            <CardImg className="mid" src={maid} style={{ width: 70, height: 80 }} alt="Card image cap" />
            <CardBody className="mid">
              <div className="font">MAID/SERVANT</div>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4">
          <Card className="hvr mb-md-4 crd">
            <CardImg className="mid" src={mason} style={{ width: 70, height: 80 }} alt="Card image cap" />
            <CardBody className="mid">
              <div className="font">MASON</div>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-4">
          <Card className="hvr mb-md-4 crd">
            <CardImg className="mid" src={securityguard} style={{ width: 70, height: 80 }} alt="Card image cap" />
            <CardBody className="mid">
              <div className="font">SECURITY GUARD</div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default JobCategories;
