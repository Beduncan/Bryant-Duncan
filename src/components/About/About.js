import React from 'react';
import {Link} from 'react-router-dom';
import Contact from "./../Contact"
// importing style
import "./About.css";


const About = () => (
<div>	
	<div className="container">
		<div className="row">
		<h1 className="title"><u>About Me</u></h1>
		</div>
		<div className="row">
			<h5 className="text-center about">Self-moe my-self. I have experitivated with a passion for web design and development. I am a fast learner 
			and am always trying to improvence with React.js, CSS, HTML5, JavaScript, 
			Jquery, Bootstrap, Node and Express. MongoDB, Mysql, and their ORM’s Mongoose and Sequelize have all 
			been used in my previous projects too. I enjoy making easy to use UIs and also making the magical logic 
			to go with it.</h5>
		</div>
		<div>
			<Contact/>
		</div>
	</div>
	<div className="row">
		<Link className="Link" to="/portfoilo"><button className="MyWork"><h3>Come See My Work!!</h3></button></Link>
	</div>
</div>
);

export default About;