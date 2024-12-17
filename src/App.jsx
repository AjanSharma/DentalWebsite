import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Contactmore from './components/contact/Contactmore'
import Slideshow from './components/slideshow/Slideshow'
import Googlereviews from './components/reviews/Googlereviews'
import Googlereviews2 from './components/reviews/Googlereviews2'
import InfoSection from './components/infosection/Infosection'

const App = () => {
  return (
    <>
        
        <Nav />
        <Header />
        <About />
        <Experience />
        {/* <Services /> */}
        {/* <Portfolio /> */}
        {/* <Testimonials /> */}
        {/* <Slideshow /> */}
        {/* <Googlereviews /> */}
        <Googlereviews2 />
        <Contactmore />
        
        {/* <Contact /> */}
        
        <Footer />
        <InfoSection />
    </>
  )
}

export default App