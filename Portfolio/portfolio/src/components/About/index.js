import React from 'react';

function About(props) {
return (
        <div>
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
                    <img src="images/zoey.png" className="rounded float-left" id="img" alt="images" />
                    <p className="content-text">Hello everyone, my name is Zoey Frakes. I was born and raised in Philadelphia, PA. I graduated from Pennsylvania State University, where I received a Bachelor of Science degree in Health Policy Administration. Although I lived in Philadelphia for most of my life, I spent a year living in Washington, D.C., after graduating from college. I have traveled a few other places but never really lived anywhere else. One of my goals in life is to visit every continent. Also, I want to visit every state in the United States. When I am not planning on traveling the world, I enjoy attending plays/ musicals, watching movies, arts and crafts, and spending time with family and friends. Currently, I’m enrolled in the University of Pennsylvania LPS Coding Boot Camp. I love to express my creativity by building layouts for web and mobile applications. Upon completion of this program, I plan to explore opportunities in User Experience Design and Front-End Development. If you or your company need help in designing beautiful and easy to navigate applications, I am your girl!</p>
                </div>
            </section>

        </div>
    );
}


export default About;