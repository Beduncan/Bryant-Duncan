import React from "react";
import "./Contact.css";
//intro my self and 

const Contact = () => (
	<div className="row">
			<div className="col-lg-4">{/*start of aside*/}
				<div className="panel panel-default">
					<div className="panel-heading">
						<h1 className="panel-title">Connect With Me</h1>
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-lg-4 col-xs-2"> 
								<a href="https://github.com/Beduncan" target="blank">
									<img className="img-responsive" src="assests\images/icon-social-github-128.png" alt="github"></img>
								</a>
							</div>
							<div className="col-lg-4 col-xs-2">
								<a  href="https://www.linkedin.com/in/bryant-duncan-662758146/" target="blank">
									<img className="img-responsive" src="assests\images/linkedin_square_color-128.png" alt="linkedin"></img>
								</a>
							</div>	
							<div className="col-lg-4 col-xs-2">
								<a href="https://stackoverflow.com/users/8565755/bryant-duncan?tab=profile" target="blank">
								<img className="img-responsive" src="assests\images/stack.png" alt="stack"></img>
								</a>
							</div>
						</div>{/*sub row*/}
					</div>
				</div>
			</div>
	</div>
);

export default Contact;