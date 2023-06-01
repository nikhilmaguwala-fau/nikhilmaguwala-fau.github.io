import React from 'react'

export default function Lsb() {
  return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <img src="./assets/images/nikhil_logo.png" alt="Logo"/>
            </div>
            <img className="me" src="./assets/images/portfolio_img.png" alt="Me"/>
            <h2 className="email">Full Stack Developer</h2>
            <h2 className="address">Base in Nuremberg, Bayern, Germany</h2>
            <p className="copyright">&copy; 2023 Nikhil. All Rights Reserved</p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a target='_blank' href="https://twitter.com/nik_maguwala"><i className="lab la-twitter"></i></a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/nikhil-maguwala/"><i className="lab la-linkedin"></i></a>
                </li>
                <li>
                    <a target='_blank' href="https://www.instagram.com/nikhil_maguwala/"><i className="lab la-instagram"></i></a>
                </li>
                <li>
                    <a target='_blank' href="https://github.com/nikhilmaguwala"><i className="lab la-github"></i></a>
                </li>
            </ul>
            <a target='_blank' href="./assets/nikhil_maguwala_resume.pdf" className="theme-btn">
                <i className="las la-user-circle"></i> Resume
            </a>
        </div>
  )
}   
