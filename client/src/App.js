import React from "react";


import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Buttons from "./Components/JobSearch/Buttons";
import CardSection from "./Components/MidPage/CardSection";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import JobSeekerDashboard from "./Components/Dashboard/JobSeekerDashboard/Dashboard";
import JobSeekerProfile from "./Components/Profile/JobSeekerProfile/JobSeekerProfile";
import ProfileUpdate from "./Components/ProfileUpdate/ProfileUpdate";
import ContactUs from "./Components/ContactUs/ContactUs";
import JobsFeed from "./Components/JobsFeed/JobsFeed";
import OurTeam from "./Components/OurTeam/OurTeam";
import JobSeekerApplication from "./Components/Dashboard/JobSeekerDashboard/JobSeekerApplication/JobSeekerApplication"; 
import EmployerApplication from "./Components/Dashboard/EmployerDashboard/EmployerApplication/EmployerApplication";
import PostJob from "./Components/Dashboard/EmployerDashboard/PostJob/PostJob";
import EmployerDashboard from "./Components/Dashboard/EmployerDashboard/EDashboard";
import FindJob from "./Components/JobsFeed/FindJobForm/FindJob"
import UpdatePassword from "./Components/auth/UpdatePassword";
const Home =()=>(
  <div>
       <Buttons/>
        <hr/>
        <CardSection/>
        <Footer/>
      
  </div>
)
const App = () => {
  // const auth = useSelector(state => state.auth);
  // console.log(auth); 
  // console.log(auth.authData.result.userType);
  return (
      <div className="all">
      <BrowserRouter>
      <Navbar/>
   
       <Switch>
        <Route exact path="/" component={Home}/>
        
        <Route exact path="/JobsFeed/FindJob" component={FindJob}/>
        <Route exact path="/jobSeeker/Dashboard" component={JobSeekerDashboard}/> 
        <Route exact path="/employer/Dashboard" component={EmployerDashboard}/> 
        <Route exact path="/jobSeeker/Profile" component={JobSeekerProfile}/>
        <Route export path="/Profile/ProfileUpdate" component={ProfileUpdate}/>
        <Route export path="/ContactUs" component={ContactUs}/>
        <Route export path="/jobsFeed" component={JobsFeed}/>
        <Route export path="/employer/postJob" component={PostJob}/>
        <Route export path="/OurTeam" component={OurTeam}/>
        <Route excat path="/updatePassword/:token" component={UpdatePassword} />
        <Route exact path="/jobSeeker/Application" component={JobSeekerApplication}/>
        <Route exact path="/employer/Application/:jobPostId" component={EmployerApplication}/>
        <Route exact path="/employer/Application" component={EmployerApplication}/>
        <Route exact path="/applicant/:applicantId" component={JobSeekerProfile}/> 
       </Switch>
      
    
        </BrowserRouter>
      </div>
  );
};


export default App;
