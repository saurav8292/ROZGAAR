import  React from "react"
import "./EDash.css"
import {Link} from "react-router-dom"

import {useHistory} from "react-router-dom"
import {useDispatch} from 'react-redux';
import { useState } from "react";
const EDash = () =>
{
    const[user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch(); 
    const history = useHistory();
    const logout = () => {
        dispatch({ type: 'LOGOUT'});
    
        history.push('/');
    
        setUser(null);
      };
    return (
       <div className="esaurav">
       <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="enavigation">
       <div className="elogo">
       </div>
       <div className="enavi">
           <ul>
               <li className="active"><Link to="/employer/Dashboard"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Dashboard</span></Link></li>
               <li><Link to="/JobsFeed"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Jobs</span></Link></li>
               <li><Link to="/employer/Application"><i className="far fa-address-card" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Applications</span></Link></li>
               <li><Link to="/employer/postJob"><i className="fas fa-bookmark" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Post Job</span></Link></li>
               {/* <li><Link to="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></Link></li>
               <li><Link to="/Profile"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Profile</span></Link></li> */}
               <li><Link  onClick={logout}><i className="fas fa-sign-out-alt" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Logout</span></Link></li>     
           </ul>
       </div>
   </div>
       </div>
    )
}
export default EDash;