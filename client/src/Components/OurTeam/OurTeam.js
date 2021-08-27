import React from 'react';

import './OurTeam.css'
import img1 from '../Assets/sks.JPG';
import img2 from '../Assets/sk.jpeg';
import img3 from '../Assets/pd1.jpg';
import img4 from '../Assets/ars.JPG';
import img5 from '../Assets/ar.jpeg';
import img6 from '../Assets/ak.jpg';
import Footer from '../Footer/Footer';




const OurTeam =()=>{
    return (
        <div style={{marginTop: "-70px"}} >
        <section id="team" className="pb-5">
    <div className="container">
        <h5 className="section-title h1">OUR TEAM</h5>
        <div className="row">
            {/* <!-- Team member --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" >
                    <div className="mainflip flip-0">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={img3} alt="card image"/></p>
                                    <h4 className="card-title">Priyangana Das</h4>
                                    <p className="card-text">Frontend Developers</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Priyangana Das</h4>
                                    <p className="card-text"> She manage complex details about projects that require analyzing design requirements, recommending technical solutions to make projects scalable, maintainable and efficient.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member -->
            <!-- Team member --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={img2} alt="card image"/></p>
                                    <h4 className="card-title">Saurav Kumar</h4>
                                    <p className="card-text">Frontend Developers</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Saurav Kumar</h4>
                                    <p className="card-text">He debug websites to fix mistakes in the code to make sure they are error-free for network administrators and end-users. Works on Responsive and Mobile Design.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member -->
            <!-- Team member --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={img1} alt="card image"/></p>
                                    <h4 className="card-title">Sunny Kumar</h4>
                                    <p className="card-text">Frontend Developers</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Sunny Kumar</h4>
                                    <p className="card-text">He interpret requirements and create project plans to meet schedule and quality goals. Work across teams to identify and solve problems. </p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member -->
            <!-- Team member --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={img5} alt="card image"/></p>
                                    <h4 className="card-title">Ayush Raj</h4>
                                    <p className="card-text">Backend Developer</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Ayush Raj</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member -->
            <!-- Team member --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={img4} alt="card image"/></p>
                                    <h4 className="card-title">Abhishek Ranjan Singh</h4>
                                    <p className="card-text">Backend Developer</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Abhishek Ranjan Singh</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member -->
            <!-- Team member --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={img6} alt="card image"/></p>
                                    <h4 className="card-title">Abhishek Kumar</h4>
                                    <p className="card-text">Backend Developer</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Abhishek Kumar</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member --> */}

        </div>
    </div>
</section>
<Footer/>
</div>
    );
}

export default OurTeam;
