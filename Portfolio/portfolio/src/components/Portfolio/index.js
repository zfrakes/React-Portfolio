import React from 'react';
import Project from '../Project';
function Portfolio (props) {
    const projectList = [
        {title: "Password Generator", link: "https://zfrakes.github.io/Password-Generator/", image: "images/PasswordGenerator.png"},
        {title: "Day Planner", link: "https://zfrakes.github.io/Day-Planner/", image: "images/DayPlanner.png"},
        {title: "Project One (What do you want to eat?)", link: "https://hannalip.github.io/Group-Project-01/", image: "images/Project1.png"},
        {title: "Weather Dashboard", link: "https://zfrakes.github.io/Weather-Dashboard/", image: "images/WeatherDashboard.png"},
        {title: "Note Taker", link: "https://safe-lowlands-48369.herokuapp.com/", image: "images/NoteTaker.png"},
        {title: "Project Two (JavaSips.Js)", link: "https://coffee-ordering-group-project.herokuapp.com/", image: "images/JavaSips.png"},
    ];


     function myProject () {
        const projects = [];
        projectList.forEach(function(project, index){
            projects.push(
                <Project 
                    title={project.title}
                    image={project.image}
                    link={project.link}
                    />
            );
        })
        return projects;
    }
    return (
    <div className="container-fluid portfolio-container-holder content-section" id="portfolio">
                <div className="portfolio-container container">
                    <h1 className="text-center">My Portfolio</h1>
                    <hr className="star-portfolio" />
                    <div className="row">
                        {myProject()}
                    </div>
                </div>
           
            </div>
  );
}

export default Portfolio;