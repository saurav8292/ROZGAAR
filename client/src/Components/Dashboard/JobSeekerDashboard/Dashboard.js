import './Dashboard.css'
import './Dash.css'
import Dash from './Dash'
import { useEffect, useState } from "react"; 
import Footer from '../../Footer/Footer';
import { empAppn } from '../../../api';
import { useHistory } from 'react-router';
import moment from 'moment';
import { fetchAppn } from '../../../actions/application';
import { useSelector } from 'react-redux';

const max5Appn = (data) => {
  const result = [];
  for(var i = 0; i < Math.min(data.length, 4); i++) {
    result.push({ jobType: data[i].jobType, appliedAt: data[i].jobAppliedAt})
  }
  result.sort((a, b) => {
    return b.appliedAt - a.appliedAt;
  });
  result.forEach(item => {
    console.log(moment(item.createdAt).format('YYYY-MM-DD HH:MM:SS'))
  })
  return result;
}

const Dashboard = () =>
{
  // const auth = JSON.parse(localStorage.getItem('profile')); 
  const [state,setState]=useState(false);
  const [appns, setAppns] = useState([]);
  const [newAppnErr, setNewAppnErr] = useState("");
  const auth = useSelector(state => state.auth);
  useEffect(() => {   
    console.log(auth) 
    const dummy = async () => {
      const data = await fetchAppn(auth?.result?._id, null);
      if(data.error) {
        setNewAppnErr(data.error);
        return;
      }
      const result = max5Appn(data.result);
      console.log(result);
      setAppns(result);
    }
    dummy();
  }, [auth])

  const handleClick = () => {
    setState(!state)
  }
    return(
      <div  >
        <div className="row" id="whole"> 
        <div className="col-3 side">
     <Dash/>
    </div>
    <div className="col-9 mainss">
    <div className="arrows">
    <i className={state ? 'fas fa-arrow-left' : 'fas fa-arrow-right'} onClick={handleClick}></i>
    <ul className={state ? 'cd side' : 'ab'}>
    <Dash/>
    </ul>
  </div>
    <div className="container">
    <div className="row align-items-start">
      <div className="col">
      <div  className="one" id="crd" style={{width:250,height:150}}>
      <div className="crcle0">
      <i className="fas" id="ikons">{auth?.result?.jobsApplied.length}</i>
      </div>
        <p className="txt">Total Job Applied</p>
    </div>
      </div>
      <div className="col">
      <div className="two" id="crd" style={{width:250,height:150}}>
      <div className="crcle1">
      <i className="fas" id="ikons">{auth?.result?.totalJobPending}</i>
      </div>
        <p className="txt">Status On Hold</p>
    </div>
      </div>
      <div className="col">
      <div className="three" id="crd" style={{width:250,height:150}}>
      <div className="crcle2">
      <i className="fas" id="ikons">{auth?.result?.totalJobApproved}</i>
      </div>
        <p className="txt">Applications Approved</p>
    </div>
      </div>
    </div>
    <div className="row align-items-center" id="srow">

      <div className="col-md-6" id="leftapp">
      <h className="np">New Applications</h>
      <table className="table" id="tbl">
      <tbody>
      {newAppnErr 
        ? <h3>{newAppnErr} </h3>
        : appns.map(app => {
          return (
            <tr>
              <th scope="col">{`Applied for: ${app.jobType}`}</th>
            </tr>
          )
      })}
      </tbody>
    </table>
      </div>

      <div className="col-md-6" id="leftapp">
      <h className="np">Total Applications</h>
      <table class="table" id="tbl">
      <thead>
        <tr>
          <th scope="col"><i className="fas fa-circle ek"></i>
          <h className="rc">Applications</h>
          <h className="dc">{auth?.result?.totalJobApplied}</h>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><i className="fas fa-circle do"></i>
          <h className="rc">Selected</h>
          <h className="dc">{auth?.result?.totalJobApproved}</h>
          </th>
        </tr>
        <tr>
          <th scope="row"><i className="fas fa-circle teen"></i>
          <h className="rc">On Hold</h>
          <h className="dc">{auth?.result?.totalJobPending}</h>
          </th>
        </tr>
        <tr>
          <th scope="row"><i className="fas fa-circle char"></i>
          <h className="rc">Rejected</h>
          <h className="dc">{auth?.result?.totalJobApplied - (auth?.result?.totalJobPending + auth?.result?.totalJobApproved)}</h>
          </th>
        </tr>
      </tbody>
    </table>
      </div>

    </div>
  </div>
    </div>
    </div>
     <Footer/>
    </div>
    )
} 

export default Dashboard;