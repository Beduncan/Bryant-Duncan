import React from "react";
import "./AboutMe.css";


//intro myself and tell my skills and passsion  

const AboutMe = () => (
            <div className="jumbotron">
					<div className="row">
							<div className="col-lg-5" />
			   			 	<img src={require('./../../images/bryant1.jpg')} className="img-responsive img-circle col-lg-2" alt="ME" />
							<div className="col-lg-5"/>
					</div>
					<div className="row">
							<div className="col-lg-4"/>
								<div className="text-Con col-lg-4">
								<h4 className="text-center">Bryant Duncan</h4>
								<p className="text-center">Junior Web Devloper based out of Mesa, Arizona</p>
			   				</div>
						<div className="col-lg-4"/>
					</div>
			</div>
);

export default AboutMe;


