import React from 'react';
import './FindJob.css';
import ApplyJob from "./ApplyJob/ApplyJob"
import Footer from '../../Footer/Footer';



const FindJob = ( props ) =>
{
    return (
        <div>
        <div className="container"  style={{marginTop: "-70px"}}>

        <p className="heads">Apply Job</p>

        <div className="row">
        <ApplyJob jobPostId= {props.location.jobPostId}/>
        </div>
         </div>
         <Footer/>
        </div>
    )
}

export default FindJob;