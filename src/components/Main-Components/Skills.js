import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-shapes"></i> my skills
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>My <span>Advantages</span></h1>
                    </div>
                    <div className="row skills text-center">
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/react.png" alt="React"/>
                                    {/* <h1 className="percent">90%</h1> */}
                                </div>
                                <p className="name">React</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/angular.png" alt="angular"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">Angular</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/flask.png" alt="flask"/>
                                    {/* <h1 className="percent">70%</h1> */}
                                </div>
                                <p className="name">Flask</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/nodejs.png" alt="nodejs"/>
                                    {/* <h1 className="percent">80%</h1> */}
                                </div>
                                <p className="name">Node JS</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/docker.png" alt="docker"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">Docker</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/jenkins.png" alt="jenkins"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">Jenkins</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/geoserver.png" alt="geo server"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">Geo Server</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/gcp.png" alt="gcp"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">GCP</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/aws.png" alt="aws"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">AWS</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/mongodb.png" alt="mongo db"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">Mongo DB</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/postgresql.png" alt="postgre sql"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">Postgre SQL</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/jira.png" alt="jira"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">Jira</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/git.png" alt="git"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">Git</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/php.png" alt="php"/>
                                    {/* <h1 className="percent">60%</h1> */}
                                </div>
                                <p className="name">php</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
    </section>
  )
}
