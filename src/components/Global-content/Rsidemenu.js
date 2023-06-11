import React from 'react'

export default function Rsidemenu() {
    function addActive(){
        document.querySelector('.responsive-sidebar-menu').classList.add('active');
    }
    function removeActive(){
        document.querySelector('.responsive-sidebar-menu').classList.remove('active');
    }
  return (
    <div>
        <span className="icon-menu" onClick={addActive}>
                <span className="bar"></span>
                <span className="bar"></span>
        </span> 
    <div className="responsive-sidebar-menu">
        <div className="overlay" onClick={removeActive}>
        </div>
            <div className="sidebar-menu-inner">
                <div className="menu-wrap">
                    <p>Menu</p>
                    <ul className="menu scroll-nav-responsive d-flex">
                        <li>
                            <a className="scroll-to" href="#home" onClick={removeActive}>
                                <i className="las la-home"></i> <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#about" onClick={removeActive}>
                                <i className="lar la-user"></i> <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#resume"onClick={removeActive}>
                                <i className="las la-briefcase"></i> <span>Resume</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#services" onClick={removeActive}>
                                <i className="las la-stream"></i> <span>Services</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#skills" onClick={removeActive}>
                                <i className="las la-shapes"></i> <span>Skills</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="#portfolio" onClick={removeActive}>
                                <i className="las la-grip-vertical"></i> <span>Portfolios</span>
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a className="scroll-to" href="#testimonial"onClick={removeActive}>*/}
                        {/*        <i className="lar la-comment"></i> <span>Testimonial</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li>
                            <a className="scroll-to" href="#contact" onClick={removeActive}>
                                <i className="las la-envelope"></i> <span>Contact</span>
                            </a>
                        </li>
                        <li>
                            <a className="scroll-to" href="/full-stack" onClick={removeActive}>
                                <i className="las la-laptop-code"></i> <span>Course</span>
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="sidebar-social">
                    <p>Social</p>
                    <ul className="social-links d-flex align-items-center">
                        <li>
                            <a target='_blank' href="https://twitter.com/nik_maguwala"><i className="lab la-twitter"></i></a>
                        </li>
                        <li>
                            <a target='_blank' href="https://www.linkedin.com/in/nikhil-maguwala/"><i className="lab la-linkedin"></i></a>
                        </li>
                        <li>
                            <a target='_blank' href="https://www.instagram.com/nikhil_maguwala/"><i className="lab la-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
    </div>
  )
}
