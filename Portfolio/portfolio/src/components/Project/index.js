import React from 'react';


function Project(props) {


    return (
        <div className="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
        <div className=" portfolio-card">
            <a href={props.link} target="_blank">
                <img src={props.image} alt="Portfolio" className="img-responsive portfolio-img" />
            </a>
            <div className="portfolio-img-desc">
                <h3>{props.title}</h3>
            </div>
        </div>
    </div>
    );
}


export default Project;