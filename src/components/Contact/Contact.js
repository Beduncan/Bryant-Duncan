import React from 'react';
// importing style
import "./Contact.css";


const Contact = () => (
	<div>
		<div className="row">
		<h1 className="title"><u>Contact Me</u></h1>
		</div>
		<div className="row">
			<div>	
				<div className="row col-lg-6"/>	
				<div className="col-lg-6">
					<form action="mailto:bryantduncan98@gmail.com" method="post" enctype="text/plain">
						<input type="submit" class="button" value="Email Me" />
					</form>
				</div>
			</div>
			<div className="row">	
				<div className="col-lg-6 words">
					<h5>I am currently looking for new opportunities</h5>
				</div>
			</div>	
			<div className="row">
				<div className="col-lg-6"/>
				<div className="col-lg-6">
	            	<form action="tel:1-480-518-0545">
	                        <input type="submit" class="button" value="Call: 480-518-0545" />
	               	</form>
				</div>	
			</div>			
		</div>
	</div>
);

export default Contact;