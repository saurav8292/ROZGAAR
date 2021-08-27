import React,{useState} from "react";
import {Redirect, useHistory } from "react-router-dom";

import { Form,} from "reactstrap";
import { getJobs } from "../../api";
import { useDispatch } from 'react-redux';
import {Button as ButtonMU} from '@material-ui/core';


import Sad from '../Actions/Sad'
import Popup from '../Popup';

const WhatWhere = () => {
  const [locerr,setLocationError]=useState("");
  const [goodTogo,setGoodToGo]=useState(false);
  const [job,setJob]=useState("");
  const [location,setLocation]=useState("");
  const [error,setError]=useState("");
  const [jobs,setJobs]=useState("");
  const [clicked, setOnclicked] = useState(false);
  const [openPopup,setOpenPopup] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  const validateLocation =(checklocation) =>{
    if(!checklocation.includes(",")){
      setLocationError("Please enter a valid Location");
      setGoodToGo(false);
    }
    else{
      setLocationError("");
      setGoodToGo(true);
    }
  };

  const handleChange = ({target : {name,value}})=>{
    console.log(name,value);
    if(name==='job'){
      setJob(value);
    }
    if(name==='location'){
      validateLocation(value);
      setLocation(value);
    }

  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!goodTogo || locerr!="") {
      setOpenPopup(true);
      setError("Location should be in city, state format");
      return;
    }
    history.push({
      pathname: '/jobsFeed',
      data: {
        job,
        location
      }
    })
    setOnclicked(true);
  }
  

  return (
    <Form class="form-row align-items-center forms" id="ssec" onSubmit={handleSubmit} >
    <Popup 
      openPopup={openPopup} 
      setOpenPopup={setOpenPopup} 
      title={error} 
      render={<Sad />}
    />
    <div className="form-row align-items-center forms" >
    <div className="col-sm-10 ikons">
      <label className="sr-only" for="inlineFormInputName">Name</label>
      <h3 className="wht">WHAT</h3>
      <input
       type="text" 
       name="job"
        className="form-control"
         id="jobcategory"
          placeholder="Job-Category"
           required
           onChange={handleChange}
           />
      <i className="ikon"><svg width="1.4em" height="1.8em" viewBox="0 0 16 16" className="bi bi-bag-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
</svg></i>
    </div>
    <div className="col-sm-10 my-1 ikons">
      <label className="sr-only" for="inlineFormInputName">Name</label>
      <h3 className="wht">WHERE</h3>
      <input 
      type="text"
      name="location"
       className="form-control"
        id="location" 
        placeholder="City, State e.g. Kolkata, West Bengal"
        required
        onChange={handleChange}
        />
      <i className="ikon"><svg width="1.5em" height="1.8em" viewBox="0 0 16 16" className="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></i>
    </div>
    <div className="col-auto my-1">
   {/* <Link to="/jobsFeed" ><button type="submit" className="btn btn-primary findlogo">Find Jobs</button></Link>*/}
   <ButtonMU type="submit" variant="contained" color="primary">
     Find Job
     {clicked &&
     <Redirect to="/jobsFeed"/>}
   </ButtonMU>
    </div>
  </div>
    </Form>
  );
};

export default WhatWhere;
