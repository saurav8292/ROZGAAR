import React from 'react';
import Footer from '../Footer/Footer';
import './ProfileUpdate.css'


const ProfileUpdate =()=>{
    return (
        // <div>
        //     <h1>Profile update</h1>
        // </div>
        <div>
        <div className="container" style={{marginTop: "-70px"}}>
        <div className="view-account">
            <section className="module">
                <div className="module-inner">
                    <div className="side-bar">
                        <div className="user-info">
                            <img className="img-profile img-circle img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                            <ul className="meta list list-unstyled">
                                <li className="name"><h5>Robin Hood</h5><hr/>
                                    <label className="label label-info"><h4>DRIVER</h4></label>
                                </li>
                                <li className="email"><a href="Robinhood.S@website.com">Robinhood.S@website.com</a></li>
                                <li className="activity">Last logged in: Today at 2:18pm</li>
                            </ul>
                        </div>
                        <nav className="side-menu">
                            <ul className="nav">
                                <li className="active"><a href="/jobSeeker/Profile"><span className="fa fa-user"></span> Profile</a></li>
                                {/* <li><a href="#"><span className="fa fa-cog"></span> Settings</a></li>
                                <li><a href="#"><span className="fa fa-credit-card"></span> Billing</a></li>
                                <li><a href="#"><span className="fa fa-envelope"></span> Messages</a></li>
                                
                                <li><a href="user-drive.html"><span className="fa fa-th"></span> Drive</a></li>
                                <li><a href="#"><span className="fa fa-clock-o"></span> Reminders</a></li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="content-panel">
                        <h2 className="title">Profile<span className="pro-label label label-warning">PRO</span></h2>
                        <form className="form-horizontal">
                            <fieldset className="fieldset">
                                <h3 className="fieldset-title">Personal Info</h3>
                                <div className="form-group avatar">
                                    <figure className="figure col-md-2 col-sm-3 col-xs-12">
                                        <img className="img-rounded img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                    </figure>
                                    <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                                        <input type="file" className="file-uploader pull-left"/>
                                        <button type="submit" className="btn btn-sm btn-default-alt pull-left">Update Image</button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-2 col-sm-3 col-xs-12 control-label">User Name</label>
                                    <div className="col-md-10 col-sm-9 col-xs-12">
                                        <input type="text" className="form-control" value="Robin07"/>
                                    </div>
                                </div>
            
                                <div className="form-group">
                                    <label className="col-md-2 col-sm-3 col-xs-12 control-label">First Name</label>
                                    <div className="col-md-10 col-sm-9 col-xs-12">
                                        <input type="text" className="form-control" value="Robin "/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
                                    <div className="col-md-10 col-sm-9 col-xs-12">
                                        <input type="text" className="form-control" value="Hood"/>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="fieldset">
                                <h3 className="fieldset-title">Contact Info</h3>
                                <div className="form-group">
                                    <label className="col-md-2  col-sm-3 col-xs-12 control-label">Email</label>
                                    <div className="col-md-10 col-sm-9 col-xs-12">
                                        <input type="email" className="form-control" value="Robinhood@website.com"/>
                                        <p className="help-block">This is the email </p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-2  col-sm-3 col-xs-12 control-label">Mobile</label>
                                    <div className="col-md-10 col-sm-9 col-xs-12">
                                        <input type="tel" className="form-control" value="+91 9778382928"/>
                                        <p className="help-block">Your mobile number</p>
                                    </div>
                                </div>
                                {/* <div className="form-group">
                                    <label className="col-md-2  col-sm-3 col-xs-12 control-label">Linkedin</label>
                                    <div className="col-md-10 col-sm-9 col-xs-12">
                                        <input type="url" className="form-control" value="https://www.linkedin.com/in/lorem"/>
                                        <p className="help-block">eg. https://www.linkedin.com/in/yourname</p>
                                    </div>
                                </div> */}
                            </fieldset>
                            <hr/>
                            <div className="form-group">
                                <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                    <input className="btn btn-primary" type="submit" value="Update Profile"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
       
    </div>
    <Footer/>
    </div>
    
    );
}


export default ProfileUpdate;