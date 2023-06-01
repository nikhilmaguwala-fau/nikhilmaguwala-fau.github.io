import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
        <div className="custom-container">
            <div className="resume-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-briefcase"></i> Resume
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Current <span>Experience</span></h1>
                </div>


                <div className="resume-timeline">
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">April, 2023 - Present</span>
                        <h2>Coding Tutor (Part-Time)</h2>
                        <p>4Geeks Academy</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">May, 2022 - Present</span>
                        <h2>Software Developer</h2>
                        <p>Abaut GmbH</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">August, 2020 - February, 2022 (1.5 Years)</span>
                        <h2>Full Stack Developer</h2>
                        <p>La Net Team Software Solutions Pvt. Ltd.</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">May, 2021 - July, 2021 (2 Months)</span>
                        <h2>Full Stack Developer</h2>
                        <p>Linkage Foods Venture Corporation</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">May, 2020 - August, 2020 (3 Months)</span>
                        <h2>Website & Application Developer</h2>
                        <p>Freelance(Gangadhara Primary School)</p>
                    </div>
                </div>

                <div className="section-header" style={{marginTop: 50}}>
                    <h1 className="scroll-animation" data-aos='fade-up'>My <span>Education</span></h1>
                </div>

                <div className="resume-timeline">
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">2022 - Present</span>
                        <h2>Master of Science in Data Science</h2>
                        <p>Friedrich-Alexander-Universität Erlangen-Nürnberg</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">2017 - 2021</span>
                        <h2>Bachelor of Engineering in Computer Engineering</h2>
                        <p>Sarvajanik College of Engineering & Technology</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
