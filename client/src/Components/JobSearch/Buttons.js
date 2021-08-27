import React from 'react';



import CarouselSection from './CarouselSection';
import WhatWhere from './WhatWhere';
import Cards from './Card';

const Buttons = ()=>{
    return (
        <div className="container-fluid" style={{marginTop: "-70px"}}>
            <div className="row">
                <div className="col-md-9">
                    <div className="row justify-content-center">
                        <WhatWhere />
                    </div>
                    <div className="row d-flex justify-content-center mt-4">
                        <Cards/>
                    </div>
                </div>
                <div className="col-md-3">
                    <CarouselSection />
                </div>
            <br/><br/>
            </div>
        </div>
    );
};


export default Buttons;