import React from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import CapitalDistrict from './components/Capital-District/CapitalDistrict.jsx';
import Services from './components/OurServices/Services.jsx';
import Featuredprojects from './components/Featured-projects/Featuredprojects.jsx';
import ContactUS from './components/Contact-us/Contact-us.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import LocationMap from './components/MapLocation/Map.jsx';
import Footer from './components/Footer/Footer.jsx';


const App = () => {
  return (
    <div>
       
       <Header />
       <Hero/>
       <About />
       <CapitalDistrict />
       <Services />
       <Featuredprojects />
       <ContactUS/>
       <Gallery />
       <LocationMap/>
       <Footer />

       
    </div>
  )
}

export default App
