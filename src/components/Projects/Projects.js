import React from "react";
import "./Projects.css";


//intro myself and tell my skills and passsion  

const Projects = () => (
<div>
	<div className="row">
		<div className="col-lg-4">	
			<div className="Card">
				<div className="row">
					<div className="image">			
						<a href="https://mighty-garden-63278.herokuapp.com/" target="#">
							<img 
								src={require('./../../images/CarShuffler.png')} 
								alt="project" 
								style={{width:`100%`}} />
						</a>		
					</div>  
					<h4 className="text-center" id="words"><b>Car Shuffler</b></h4>
				</div>	
			</div>
		</div>
		<div className="col-lg-4">	 
			<div className="Card">
				<div className="row">
					<div className="image">			
						<a href="https://sheltered-everglades-96931.herokuapp.com/index" target="#">
							<img 
								src={require('./../../images/EatDeezBurgers.png')} 
								alt="project" 
								style={{width:`100%`}} />
						</a>		
					</div>  
					<h4 className="text-center" id="words"><b>Eat Deez Burgers</b></h4>
				</div>	
			</div> 
		</div>		
		<div className="col-lg-4">	
			<div className="Card">
				<div className="row">
					<div className="image">			
						<a href="https://beduncan.github.io/RaceCarGame/" target="#">
							<img 
								src={require('./../../images/Car.png')} 
								alt="project" 
								style={{width:`100%`}} />
						</a>		
					</div>  
					<h4 className="text-center" id="words"><b>Car Collector</b></h4>
				</div>	
			</div>
		</div>
	</div>		
	<div className="row">
		<div className="col-lg-4">	 
			<div className="Card">
				<div className="row">
					<div className="image">			
						<a href="https://beduncan.github.io/Find-My-Movie-FMM-/" target="#">
							<img 
								src={require('./../../images/FMM.png')} 
								alt="project" 
								style={{width:`100%`}} />
						</a>		
					</div>  
					<h4 className="text-center" id="words"><b>Find My Movie</b></h4>
				</div>	
			</div> 
		</div>		
		<div className="col-lg-4">	 
			<div className="Card">
				<div className="row">
					<div className="image">			
						<a href="https://github.com/Beduncan/Bebay" target="#">
							<img 
								src={require('./../../images/bebay.png')} 
								alt="project" 
								style={{width:`100%`}} />
						</a>		
					</div>  
					<h4 className="text-center" id="words"><b>Bebay</b></h4>
				</div>	
			</div> 
		</div>
		<div className="col-lg-4">	 
			<div className="Card">
				<div className="row">
					<div className="image">			
						<a href="https://beduncan.github.io/Wheres-My-Train/" target="#">
							<img 
								src={require('./../../images/train.png')} 
								alt="project" 
								style={{width:`100%`}} />
						</a>		
					</div>  
					<h4 className="text-center" id="words"><b>Wheres My Train</b></h4>
				</div>	
			</div> 
		</div>		
	</div>
	<div className="row">
		<div className="col-lg-4">	 
			<div className="Card">
				<div className="row">
					<div className="image">			
						<a href="https://beduncan.github.io/Car-Gifs/" target="#">
							<img 
								src={require('./../../images/carGifs.png')} 
								alt="project" 
								style={{width:`100%`}} />
						</a>		
					</div>  
					<h4 className="text-center" id="words"><b>Car Gifs</b></h4>
				</div>	
			</div> 
		</div>		
		<div className="col-lg-4">	 
			<div className="Card">
				<div className="row">
					<div className="image">			
						<a href=" https://beduncan.github.io/Pirate-of-the-Caribbean-TrivaGame/" target="#">
							<img 
								src={require('./../../images/Triva.png')} 
								alt="project" 
								style={{width:`100%`}} />
						</a>		
					</div>  
					<h4 className="text-center" id="words"><b>Pirate TrivaGame</b></h4>
				</div>	
			</div> 
		</div>
		<div className="col-lg-4">	 
			<div className="Card">
				<div className="row">
					<div className="image">			
						<a href="https://github.com/Beduncan/node-hangman" target="#">
							<img 
								src={require('./../../images/node.png')} 
								alt="project" 
								style={{width:`100%`}} />
						</a>		
					</div>  
					<h4 className="text-center" id="words"><b>Node Hangman</b></h4>
				</div>	
			</div> 
		</div>		
	</div>			
</div>
);

export default Projects;
