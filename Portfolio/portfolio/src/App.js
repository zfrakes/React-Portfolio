import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import './App.css';

const projectList = [
        {title: "Password Generator", link: "https://zfrakes.github.io/Password-Generator/", image: "images/Password Generator.png"},
        {title: "Day Planner", link: "https://zfrakes.github.io/Day-Planner/", image: "images/Day Planner.png"},
        {title: "Project One (What do you want to eat?)", link: "https://hannalip.github.io/Group-Project-01/", image: "images/Project1.png"},
        {title: "Weather Dashboard", link: "https://zfrakes.github.io/Weather-Dashboard/", image: "images/Weather Dashboard.png"},
        {title: "Note Taker", link: "https://safe-lowlands-48369.herokuapp.com/", image: "images/Note Taker.png"},
        {title: "Project Two (JavaSips.Js)", link: "https://coffee-ordering-group-project.herokuapp.com/", image: "images/JavaSips.png"},
    ];
function App() {

    function myProject() {
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
        <div>
            <Header />
            <h1 className="intro-text"><span className="lead" id="typed"></span></h1>
            <span className="continue"><a href="#about"></a></span>


            <section className="success" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="aboutMe">About Me</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <img src="images/zoey.jpg" className="rounded float-left" id="img" alt="images" />
                    <p className="content-text">Hello everyone, my name is Zoey Frakes. I was born and raised in Philadelphia, PA. I graduated from Pennsylvania State University, where I received a Bachelor of Science degree in Health Policy Administration. Although I lived in Philadelphia for most of my life, I spent a year living in Washington, D.C., after graduating from college. I have traveled a few other places but never really lived anywhere else. One of my goals in life is to visit every continent. Also, I want to visit every state in the United States. When I am not planning on traveling the world, I enjoy attending plays/ musicals, watching movies, arts and crafts, and spending time with family and friends. Currently, I’m enrolled in the University of Pennsylvania LPS Coding Boot Camp. I love to express my creativity by building layouts for web and mobile applications. Upon completion of this program, I plan to explore opportunities in User Experience Design and Front-End Development. If you or your company need help in designing beautiful and easy to navigate applications, I am your girl!</p>
                </div>
            </section>

            <div className="container-fluid portfolio-container-holder content-section" id="portfolio">
                <div className="portfolio-container container">
                    <h1 className="text-center">My Portfolio</h1>
                    <hr className="star-portfolio" />
                    <div className="row">
                        {myProject()}
                    </div>
                </div>


                <div className="container-fluid contact-me-container content-section" id="contact">
                    <div className="container">
                        <h1 className="contact">Contact Me</h1>
                        <hr className="line" />
                        <div className="row">
                            <div className="col-sm-12 col-md-12">


                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon"></div>
                                        <input type="text" className="form-control" id="name" placeholder="Name" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon"></div>
                                        <input type="text" className="form-control" id="email" placeholder="Email Address" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon"></div>
                                        <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-12">
                                <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                            </div>

                        </div>

                        <div className="text-center">
                            <button className="btn btn-default submit-button btn-lg btn-secondary"><i className="fa fa-paper-plane"></i> Send</button>
                        </div>


                    </div>
                </div>

            </div>
            
           <Footer /> 

        </div>
    );
}

export default App;
