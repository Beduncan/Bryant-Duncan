import React from "react";
import "./AboutPg.css";
import About from "./../../components/About";
import Header from "./../../components/Header";  
import Footer from "./../../components/Footer";  
import Nav from "./../../components/Nav";  

const AboutPg = () => (
<div className="About">	
    <Header/> 
    <div>
        <About/>
    </div>
    <Footer/>
</div>
);

export default AboutPg;