import React from "react";
import About from "./../../components/AboutMe";
import Footer from "./../../components/Footer";
import Projects from "./../../components/Projects";
import "./Home.css";


//intro myself and tell my skills and passsion  

const Home = () => (
	<div>
		<About/>
		<Projects/>
		<Footer/>
	</div>

);

export default Home;