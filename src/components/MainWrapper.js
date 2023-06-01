import React from 'react'
import Lsb from './Global-content/Lsb'
import Herosec from './Main-Components/Herosec'
import About from './Main-Components/About'
import Resume from './Main-Components/Resume'
import Service from './Main-Components/Service'
import Skills from './Main-Components/Skills'
import Portfolio from './Main-Components/Portfolio'
import Testimonials from './Main-Components/Testimonials'
import Clientlogos from './Main-Components/Clientlogos'
import Pricing from './Main-Components/Pricing'
import Contact from './Main-Components/Contact'

export default function Main() {
  return (
    <main className="drake-main">
        <div id="smooth-wrapper">
            <div id="smooth-content">

                <Lsb/> {/* this component will used by mobile devices */}
                <Herosec/>
                <About/>
                <Resume/>
                <Service/>
                <Skills/>
                <Portfolio/>
                {/*<Testimonials/>*/}
                {/*<Clientlogos/>*/}
                {/*<Pricing/>*/}
                <Contact/>
                
            </div>
        </div>
    </main>
  )
}
