import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        Lightbox.option({
          resizeDuration: 200,
          fadeDuration: 600,
          imageFadeDuration: 600,
          wrapAround: true
        });
      }, []);
  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
        <div className="custom-container">
            <div className="portfolio-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-grip-vertical"></i> portfolio
                    </h4>
                    <h1 className="scroll-animation">Featured <span>Projects</span></h1>
                </div>

                <div className="row portfolio-items">
                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-full">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio_img_1.png" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio_img_1.png" alt="Portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a target='_blank' href="https://www.mathworks.com/products/matlab.html">Matlab</a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://www.python.org/">Python</a>
                                    </li>
                                </ul>
                            </div>
                            <h2><a target='_blank' href="https://github.com/nikhilmaguwala/image_classification_resnet50">Image Classification Using Resnet-50</a></h2>
                        </div>
                    </div>

                    <div className="col-md-12 scroll-animation"  data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio_img_4.png" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio_img_4.png" alt="Portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a target='_blank' href="https://react.dev/">React</a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://www.python.org/">Python</a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://www.w3schools.com/html/default.asp">HTML/CSS</a>
                                    </li>
                                </ul>
                            </div>
                            <h2><a target='_blank' href="https://www.youtube.com/playlist?list=PLjMIC_h0rNV1GmEoxd_7C77CJlbv_sHun">Full Stack Developer Course</a></h2>
                        </div>
                    </div>

                    <div className="col-md-12 scroll-animation" data-aos='fade-right'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio_img_2.png" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio_img_2.png" alt="Portfolio"/>
                                </a>

                                <img src="../assets/images/portfolio2.jpg" alt="Portfolio"/>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a target='_blank' href="https://reactnative.dev/">React Native</a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://en.wikipedia.org/wiki/Machine_learning">Machine Learning</a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://nodejs.org/en">Node JS</a>
                                    </li>
                                </ul>
                            </div>
                            <h2><a target='_blank' href="https://devfolio.co/projects/inhale-2f8e">inHALE - Respiratory Disease Predictor</a></h2>
                        </div>
                    </div>

                    <div className="col-md-12 scroll-animation"  data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio_img_3.png" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio_img_3.png" alt="Portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a target='_blank' href="https://cordova.apache.org/">Cordova</a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://www.php.net/">PHP</a>
                                    </li>
                                </ul>
                            </div>
                            <h2><a target='_blank' href="https://play.google.com/store/apps/details?id=com.gpsgangadhara.app">GPS Gangadhara</a></h2>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </section>
  )
}
