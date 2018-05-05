import React from "react";
import {Link} from 'react-router-dom';
import "./Home.css";

const Home = () => (
	<div className="background">
		<div>	
			<h1 className="word">Bryant Duncan</h1>
			<h2 className="word2"><span>Junior Full Stack</span><br/><span>Web Devloper</span></h2>
	        <Link className="Link" to="/about"><button className="next">Take A Look!!</button> </Link>

		</div>
		
	</div>	
);

export default Home;