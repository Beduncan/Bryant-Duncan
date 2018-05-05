import React from 'react';
// importing style
import "./Footer.css";

const Footer = () => (
		// this is what we are rendering
		<div className="footer">
		<div className="row">
			<div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 logos">	
				<div className="col-lg-4 col-md-4 col-xs-4"> 
					<a href="https://github.com/Beduncan" target="blank">
					<img className="img-responsive" src={require('./../../images/github.png')} alt="github"></img>
					</a>
				</div>
				<div className="col-lg-4 col-md-4 col-xs-4">
					<a  href="https://www.linkedin.com/in/bryant-duncan-662758146/" target="blank">
					<img className="img-responsive" src={require('./../../images/linkedin_square_color-128.png')} alt="linkedin"></img>
					</a>
				</div>	
				<div className="col-lg-4 col-md-4 col-xs-4">
					<a href="https://stackoverflow.com/users/8565755/bryant-duncan?tab=profile" target="blank">
					<img className="img-responsive" src={require('./../../images/stack.png')} alt="stack"></img>
					</a>
				</div>
			</div>				
			<p className="name">Bryant Duncan</p>
		</div>		
		</div>
	);

export default Footer;