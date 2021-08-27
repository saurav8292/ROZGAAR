import React from 'react';
import Footer from '../Footer/Footer';
import "./contact.css"

const ContactUs = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <h3 className="text-center text-uppercase">contact us</h3>
          <p className="text-center w-75 m-auto"><h5>Feel free to ask and contact us, we will help you in every possible way</h5></p>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i className="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">call us</h4>
                  <p>+919191919119,+919393949494</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">office loaction</h4>
                  <address>Kolkata </address>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i className="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">email</h4>
                  <p>rozgaar@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}


export default ContactUs;