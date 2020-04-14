import React from 'react';

function Footer (props) {
  return (
    <footer>
        <div className="container footer-container">
            <div className="row footer-row">
                <div className="col-xs-12 col-sm-6 col-md-6 text-center">
                    <h4 className="text-center">Find me here</h4>
                    <strong>
                        <i className="fa fa-location-arrow"></i>
                    </strong>
                    <p>Philadelphia, PA,</p>
                    <p><a href="mailto:Zfrakes811@gmail.com"><span> Email: Zfrakes811@gmail.com</span></a></p>
                </div>

                <div className="col-xs-12 col-md-6 col-sm-6 social-section">
                    <div className="text-center">
                        <h4 className="text-center">Learn more about me</h4>
                        <div className="text-center social-buttons">

                            <a href="https://github.com/zfrakes" target="_blank">
                                <img src="https://img.icons8.com/ios/50/000000/github.png" className="btn btn-lg social-button git-hub" />
                            </a>
                            <a href="Resume.pdf" target="_blank">
                                <img src="https://img.icons8.com/carbon-copy/100/000000/resume.png" className="btn btn-lg social-button link-resume" />
                            </a>
                            <a href="https://www.linkedin.com/in/zoey-frakes-a929b615b/" target="_blank" className="btn btn-lg social-button link-linkedin"><i className="fa fa-linkedin"></i>
                            </a>

                        </div>
                        <hr className="footer-hr" />
                        <h4 className="author">Made by <strong>Zoey Frakes</strong></h4>
                    </div>
                </div>
            </div>
            <hr className="copyright" />
            <h4><i className="fa fa-copyright"></i> COPYRIGHTS 2020 ALL RIGHTS RESERVED</h4>
        </div>
    </footer>
  );
}

export default Footer;
