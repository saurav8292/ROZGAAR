
import React,{useEffect,useState} from 'react';
import { Link, useParams } from "react-router-dom";
//import profilepicture from '.../Assets/ProfilePicture.jpg';
import profilepicture from './ProfilePicture.jpg';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row
  } from 'reactstrap';
import './JobSeekerProfile.css';
import {getProfile} from '../../../actions/auth.js'
import Footer from '../../Footer/Footer';

const Profile = () => {

    const tempUser = JSON.parse(localStorage.getItem('profile'));

    const [user,setUser] = useState("");
  //  const [name ,setName] = useState("");
    const userId = tempUser?.result?._id;
    console.log("ID: "+userId);

    useEffect( async () => {    
        const dummy = async () => {
          return await setUser(await getProfile(userId));
        }
        await dummy();
      },[])
    

    console.log(user);
    const name = user?.result?.profile?.name;
    const email = user?.result?.profile?.email;
    const contact = user?.result?.profile?.contact;
    const dob = user?.result?.profile?.dob;

    const locality = user?.result?.address?.locality;
    const city = user?.result?.address?.city;
    const district = user?.result?.address?.district;
    const state = user?.result?.address?.state;
    const pincode =user?.result?.address?.pincode;

    const lang = user?.result?.profile?.languages[0];
    const skill = user?.result?.profile?.skills[0];
  //  const lang = languages[0];
    // var lang="";
    // languages.forEach( function(temp){
    //     lang+= temp+",";
    // })
    
   
   // const name = user.profile;
   // console.log(user?.result?.profile);
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        console.log("birthDate" +birthDate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    
    
   
    
    const params = useParams(); 

    return (
        <div style={{marginTop: "-70px"}}>
            <div class="row ml-3 mr-3">
                <div className="col-lg-3">
                <Card style={{backgroundColor:"#eee", border:"none"}}>
        <CardImg className="mid" src={profilepicture} alt="Profile picture" style={{ width: "250px", height: "250px", borderRadius: "180px"}} />
        <CardBody className="middle">
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{skill}</CardSubtitle>
          {!params.applicantId ?
              <Link to="/Profile/ProfileUpdate" class="btn btn-primary btn-lg" role="button" aria-pressed="true"><b>Edit Profile</b></Link>
            : null
           }
          </CardBody>
      </Card>
                </div>

                <div className="col-lg-9">
                    <h2 style={{ textAlign: "center" }}><b><i>{name}</i></b></h2>
                    <div>
                        <div >
                            <Row className="mt-3">
                                <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">User ID</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>{userId}</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Expected Salary</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>NA</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Rating</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>NA</CardText>
                                    </Card>
                                </Col>
                            
                                <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Current Salary</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>${user?.result?.profile?.currSalary}</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-4 col-md-6 col--sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Age</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>{getAge(dob)}</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Experience</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>NA</CardText>
                                    </Card>
                                </Col>
                            </Row>

                            <h2 className="mt-4"><b><i>More Details</i></b></h2>
                            <hr />
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Name : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>{name}</i></p></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Email id : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>{email}</i></p></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Phone no : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>{contact}</i></p></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Address : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>{locality}, {city}, {district}, {state}, PIN -{pincode}</i></p></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Language : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>{lang}</i></p></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Skill : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>{skill}</i></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    );
}

export default Profile;
