import React from "react";
import {Link} from 'react-router-dom';
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Projects from "./../../components/Projects";
import Nav from "./../../components/Nav";  
import "./MyWork.css";



//intro myself and tell my skills and passsion  

const MyWork = () => (
<div>
	<div className="container MyWork">	
		<div className="jumbotron">
			<h1 className="Title">My Work</h1>
			<Link className="Link" to="/about"><button className="back"><p>GO back!</p></button></Link>
		</div>
		<Projects/>
	</div>
	<Footer/>
</div>
);

export default MyWork;