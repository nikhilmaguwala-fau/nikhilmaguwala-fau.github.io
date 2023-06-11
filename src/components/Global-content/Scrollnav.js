import React from 'react'

export default function Scrollnav() {
  return (
    <ul className="menu scroll-nav d-flex">
        <li>
            <a className="scroll-to" href="#home">
                <span>Home</span> <i className="las la-home"></i>
            </a>
        </li>
        <li>
            <a className="scroll-to" href="#about">
                <span>About</span> <i className="lar la-user"></i>
            </a>
        </li>
        <li>
            <a className="scroll-to" href="#resume">
                <span>Resume</span> <i className="las la-briefcase"></i>
            </a>
        </li>
        <li>
            <a className="scroll-to" href="#services">
                <span>Services</span> <i className="las la-stream"></i>
            </a>
        </li>
        <li>
            <a className="scroll-to" href="#skills">
                <span>Skills</span> <i className="las la-shapes"></i>
            </a>
        </li>
        <li>
            <a className="scroll-to" href="#portfolio">
                <span>Portfolios</span> <i className="las la-grip-vertical"></i>
            </a>
        </li>
        {/*<li>*/}
        {/*    <a className="scroll-to" href="#testimonial">*/}
        {/*        <span>Testimonial</span> <i className="lar la-comment"></i>*/}
        {/*    </a>*/}
        {/*</li>*/}
        <li>
            <a className="scroll-to" href="#contact">
                <span>Contact</span> <i className="las la-envelope"></i>
            </a>
        </li>
        <li>
            <a className="scroll-to" href="/full-stack">
                <span>Course</span> <i className="las la-laptop-code"></i>
            </a>
        </li>
    </ul>
  )
}
