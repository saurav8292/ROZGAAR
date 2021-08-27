import React, { useState } from 'react';

import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col,
} from 'reactstrap';
import './Card.css';

import { useHistory } from 'react-router-dom';

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import Popup from '../Popup';
import Happy from '../Actions/Happy';
import Sad from '../Actions/Sad'

const Cards = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [openPopup,setOpenPopup] = useState(false);
    const [title, setTitle] = useState("");
    const history = useHistory();
    const [render, setRender] = useState(<br />)

    // hire now true -> Emp false -> JS
    const handleClick1 = () => {
        if(!user) {
            setOpenPopup(true);
            setTitle('U are not logged in');
            setRender(<Sad />)
            return;
        }
        if(!user.result.userType) {
            setOpenPopup(true);
            setTitle('Only Employer can use this feature');
            setRender(<Sad />)
            return;
        }
        setTitle('To hire first you need to post a job')
        setOpenPopup(true);
        setRender(<Happy />)
        setTimeout(() => {
            setOpenPopup(false);
            history.push('/employer/postJob');
        }, 3000)
    }

    const handleClick2 = () => {
        if(!user) {
            setOpenPopup(true);
            setTitle('U are not logged in');
            setRender(<Sad />)
            return;
        }
        if(user.result.userType) {
            setOpenPopup(true);
            setTitle('Only Job Seeker can use this feature');
            setRender(<Sad />)
            return;
        }
        setTitle('To get a job find job as per your requirement')
        setOpenPopup(true);
        setRender(<Happy />)
        setTimeout(() => {
            setOpenPopup(false);
            history.push('/jobsFeed');
        }, 3000)
    }

    return (
        <div>
        <Popup 
            openPopup={openPopup} 
            setOpenPopup={setOpenPopup} 
            title={title} 
            render={render}
        />
            <Row>
                <Col className="sm-12 xs-12 mb-4">
                    <Card className="crdsz">
                        <CardBody style={{ textAlign: "center" }}>
                            <CardTitle tag="h5">I am Employer</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Need Staff</CardSubtitle>
                            <Button type="submit" color="btn btn-primary" onClick={handleClick1}>Hire Now</Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col className="sm-12 xs-12 mb-4">
                    <Card className="crdsz">
                        <CardBody style={{ textAlign: "center" }}>
                            <CardTitle tag="h5">I am Candidate</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Need Job</CardSubtitle>
                            <Button type="submit" color="btn btn-primary" onClick={handleClick2}>Get job now</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default Cards;