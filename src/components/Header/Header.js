import React from "react";
import "./Header.css";
const AboutMe = () => (
            <div className="jumbotron jumbotrons">
					<div className="row">
							<div className="col-lg-5 col-md-5 col-sm-5 col-xs-5" />
			   			 	<img src={require('./../../images/bryant1.jpg')} className="img-responsive img-circle col-lg-2 col-md-2 col-sm-2 col-xs-2" alt="ME" />
							<div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"/>
					</div>
					<div className="row">
							<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"/>
								<div className="text-Con col-lg-6 col-md-6 col-sm-6 col-xs-6">
								<h3 className="text-center">Bryant Duncan</h3>
								<h5 className="text-center">Junior Web Devloper based out of Mesa, Arizona</h5>
			   				</div>
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"/>
					</div>
			</div>
);

export default AboutMe;


