import React from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Projects from "./../../components/Projects";
import About from "./../../components/About";
import Contact from "./../../components/Contact";
import "./Home.css";



//intro myself and tell my skills and passsion  

const Home = () => (
	<div>
		<Header/>
		<About/>
		<Projects/>
		<Contact/>
		<Footer/>
	</div>

);

export default Home;