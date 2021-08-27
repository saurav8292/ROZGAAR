import React from 'react';
import { Container } from 'reactstrap';
import HowWeWork from './HowWeWork';
import JobCategories from './JobCategories';

const CardSection = ()=>{
    return (
        <div>
            <h1 className="mt-4 mb-4" style={{ textAlign: "center" }}
            >How We Work</h1>
            <Container>
            <HowWeWork/>
            </Container>
            <hr></hr>
            <Container>
            <h1 className="mt-4 mb-4" style={{textAlign: "center"}}>Job Categories</h1>
            <JobCategories/>
            </Container>
        </div>
    );
};

export default CardSection;