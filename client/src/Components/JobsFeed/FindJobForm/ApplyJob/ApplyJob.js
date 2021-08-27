import React, { useState } from 'react'
import "./ApplyJob.css"

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import "react-datepicker/dist/react-datepicker.css";
import {applyJob} from '../../../../actions/job.js'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'


const ApplyJob = (props) =>
{
  const [message, setMessage] = useState("");
  const history = useHistory();
  
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const initialState = {
    name: "",
    email :"", 
    contact :"",
    locality : "",
    city : "",
    district :"",
    state :"",
    pincode : "",
    skill : "",
    jobSeekerId: auth?.result?._id,
    jobPostId : props.jobPostId,
    dob :"", 
    read : false,
    currentStatus : "", 
    _10th_school: "",
    _10th_board: "",
    _10th_percentage: "",
    _12th_school: "",
    _12th_board: "",
    _12th_percentage: "",
    _grad_school: "",
    _grad_board: "",
    _grad_percentage: "",
    job: "",
    year: "",
    language: "",
  }
  const [formData, setFormData] = useState(initialState);

  const handleDateChange = (date) =>
  {
    setSelectedDate(date);
    setFormData({ ...formData,["dob"]:selectedDate})
  };

  const handleChange= (event)=>{
  //  console.log(event.target.value);
    setFormData({...formData,[event.target.name] : event.target.value})
  }

  const handleChange1 =(e)=>{
    setFormData({...formData, [e.target.name] : e.target[e.target.value].label })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const data = await applyJob(formData, dispatch);
    console.log(data);
    if(data?.error) {
      return setMessage(data?.error)
    }
    setMessage("Applied successfully!");
    setFormData(initialState);
    setTimeout(()=>{
      history.push('/jobSeeker/Dashboard');
    },2000);
  }

  return (
    
    <div className="xdd">
    <form className="needs-validation" onSubmit = {handleSubmit}>

      <p className="xsd">Personal Details :-</p>
      
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label for="validationCustom03">Full Name</label>
          <input type="text" 
          className="form-control" 
          id="validationCustom03" 
          name = "name"
          placeholder="Full Name" 
          onChange = {handleChange}
          required
          />
          <div className="invalid-feedback">
          Please provide a valid name.
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <label for="validationCustom03">Email</label>
          <input type="text" className="form-control" id="validationCustom03"
          name = "email"
          onChange = {handleChange}
          placeholder="Email" required/>
          <div className="invalid-feedback">
            Please provide a valid Email.
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <label for="validationCustomauthname">Contact</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">+91</span>
            </div>
            <input type="text" className="form-control" 
            id="validationCustomauthname" placeholder="Phone number"
            name = "contact"
            onChange = {handleChange}
            aria-describedby="inputGroupPrepend" required/>
            
            <div className="invalid-feedback">
              Please choose a authname.
            </div>
          </div>
        </div>
      </div>

    <div className="form-row" style={{marginLeft:"10px"}}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
      <KeyboardDatePicker
      margin="normal"
      name="dob"
      id="date-picker-dialog"
      label="Date Of Birth"
      format="dd/MM/yyyy"
      value={selectedDate}
      onChange={handleDateChange}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
      </Grid>
      </MuiPickersUtilsProvider>
    </div>

    <p className="xsd">Address :-</p>
      <div className="form-row">
        <div className="col-md-4 mb-3">
            <label for="validationCustom03">Locality</label>
            <input type="text" className="form-control"
            name = "locality" 
            onChange = {handleChange}
            id="validationCustom03" placeholder="Locality" required/>
            <div className="invalid-feedback">
              Please provide a valid input
            </div>
          </div>

        <div className="col-md-4 mb-3">
          <label for="validationCustom03">City</label>
          <input type="text" className="form-control"
           id="validationCustom03" placeholder="City"
           name = "city"
           onChange= {handleChange}
           required/>
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>

        <div className="col-md-4 mb-3">
            <label for="validationCustom03">District</label>
            <input type="text" className="form-control"
             name = "district"
             onChange= {handleChange}
             id="validationCustom03" placeholder="District" required/>
            <div className="invalid-feedback">
              Please provide a valid district
            </div>
        </div>

        <div className="col-md-4 mb-3">
            <label for="validationCustom03">State</label>
            <input type="text" className="form-control"
             name = "state"
             onChange= {handleChange}
             id="validationCustom03" placeholder="State" required/>
            <div className="invalid-feedback">
              Please provide a valid state
            </div>
        </div>


        <div className="col-md-4 mb-3">
          <label for="validationCustom03">Pincode</label>
          <input type="text" className="form-control" 
           name = "pincode"
           onChange= {handleChange}
          id="validationCustom03" placeholder="Pincode" required/>
          <div className="invalid-feedback">
            Please provide a valid pincode
          </div>
        </div>
      </div>

      <p className="xsd">Skills :-</p>
      <div className="form-row">
        <div className="col-auto my-1">
          <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Skills</label>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"
           name = "skill"
           onChange= {handleChange1} >

            <option selected>Skill</option>
            <option value="1">Cooking</option>
            <option value="2">Driving</option>
            <option value="3">Security guard</option>
            <option value="4">Receptionist</option>
          </select>
        </div>
      </div>

      <p className="xsd">Regional Language :-</p>
      <div className="form-row">
        <div className="col-auto my-1">
          <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Skills</label>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"
           name = "language"
           onChange= {handleChange1} >

            <option selected>Language</option>
            <option value="1">Hindi</option>
            <option value="2">Bengali</option>
            <option value="3">Bhojpuri</option>
            <option value="4">Magahi</option>
          </select>
        </div>
      </div>

      <p className="xsd">Educational Qualification :-</p>
      <div className="form-row">
      <h6 className="can">Can You ?</h6>
      <div className="able">
      <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
        name = "read"
      // value="option1"
      />
      <label class="form-check-label" for="inlineCheckbox1">Read</label>
      </div>
      <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" 
        name = "write"
        value="option1"/>

      <label class="form-check-label" for="inlineCheckbox1">Write</label>
      </div>
      </div>
      </div>
      { /* 10th */ }
      <div className="form-row met">
        <h className="matric mtrs">Matric</h>
        <div className="col-md-3 mb-3">
            <label for="validationCustom03">School</label>
            <input 
              type="text" 
              className="form-control" 
              name = "_10th_school"
              onChange= {handleChange}
              id="validationCustom03" 
              placeholder="School" 
            />
            <div className="invalid-feedback">
              Please provide a valid input
            </div>
        </div>

        <div className="col-md-3 mb-3">
          <label for="validationCustom03">Board</label>
          <input 
            type="text" 
            className="form-control"
            name = "_10th_board"
            onChange= {handleChange} 
            id="validationCustom03" 
            placeholder="Board"
          />

          <div className="invalid-feedback">
            Please provide a valid input
          </div>
          </div>

        <div className="col-md-3 mb-3">
          <label for="validationCustom03">Percentage</label>
          <input 
            type="text" 
            className="form-control" 
            name = "_10th_percentage"
            onChange= {handleChange}
            id="validationCustom03" 
            placeholder="Percentage" 
          />
          <div className="invalid-feedback">
            Please provide a valid input
          </div>
        </div>

      </div>

      <div className="form-row met">
      <h className="matric">Intermediate</h>
      <div className="col-md-3 mb-3">
          <label for="validationCustom03">School</label>
          <input 
            type="text" 
            className="form-control"
            name = "_12th_school"
            onChange= {handleChange}
            id="validationCustom03" 
            placeholder="School"
          />
          
          <div className="invalid-feedback">
            Please provide a valid input
          </div>
        </div>
      { /* 12th */ }
      <div className="col-md-3 mb-3">
        <label for="validationCustom03">Board</label>
        <input 
          type="text" 
          className="form-control" 
          name = "_12th_board"
          onChange= {handleChange}
          id="validationCustom03" placeholder="Board"
        />
        <div className="invalid-feedback">
          Please provide a valid input
        </div>
      </div>

      <div className="col-md-3 mb-3">
          <label for="validationCustom03">Percentage</label>
          <input type="text" className="form-control"
           id="validationCustom03" 
           name = "_12th_percentage"
           onChange= {handleChange}
           placeholder="Percentage" />
          <div className="invalid-feedback">
            Please provide a valid input
          </div>
        </div>
      </div>

      <div className="form-row met">
      <h className="matric grds">Graduation</h>
      <div className="col-md-3 mb-3">
          <label for="validationCustom03">School</label>
         
          <input 
            type="text" 
            className="form-control" 
            id="validationCustom03" 
            name = "_grad_school"
            onChange= {handleChange}
            placeholder="University" 
          />
         
          <div className="invalid-feedback">
            Please provide a valid input
          </div>
        </div>

        <div className="col-md-3 mb-3">
        <label for="validationCustom03">Board</label>
        
        <input 
          type="text" 
          className="form-control"
          id="validationCustom03"
          name = "_grad_board"
          onChange= {handleChange}
          placeholder="Degree" 
         />
        
        <div className="invalid-feedback">
          Please provide a valid input
        </div>
      </div>

        <div className="col-md-3 mb-3">
            <label for="validationCustom03">Percentage</label>
        
            <input 
              type="text" 
              className="form-control"
              id="validationCustom03"
              name = "_grad_percentage"
              onChange= {handleChange}
              placeholder="Percentage" 
            />
        
            <div className="invalid-feedback">
              Please provide a valid %
            </div>
          </div>

        </div>
      <div className="form-row">
          <div className="col-auto my-1">
              <h4>Current Status</h4>
              <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Current Status</label>
              <select className="custom-select mr-sm-2"
                name = "currentStatus"
                onChange= {handleChange1}
               id="inlineFormCustomSelect">
                <option selected>Current Status</option>
                <option value="1">Employed</option>
                <option value="2">Student</option>
                <option value="3">Unemployed</option>
                <option value="4">Self Employed</option>
              </select>
            </div>
        </div>

      <p className="xsd">Job Experience :-</p>
        
      <div className="form-row">
          <div className="col-md-3 mb-3">
          <label for="validationCustom03">Job</label>
          <input type="text" className="form-control" 
          id="validationCustom03" 
          name = "job"
          onChange= {handleChange}
          placeholder="Job" />
            <div className="invalid-feedback">
              Please provide a valid input
            </div>
          </div>

          <div className="col-md-2 mb-3">
            <label for="validationCustom03">Year</label>
            <input type="text" className="form-control"
             id="validationCustom03"
             name = "year"
             onChange= {handleChange}
             placeholder="year" />
            <div className="invalid-feedback">
              Please provide a valid year
            </div>
          </div>
        </div>

      <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label className="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree to our Terms n Conditions
            </div>
          </div>
        </div>


      <button className="btn btn-primary" type="submit">Submit form</button>
    </form>
    <h3>{message}</h3>
    
  </div>
  
  
  )
}
  
export default ApplyJob;