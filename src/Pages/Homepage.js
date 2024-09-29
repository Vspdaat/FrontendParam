import React from 'react'
import AboutUs from '../Components/AboutUs';
import BestSellers from '../Components/BestSellers';
import WhyChooseUs from '../Components/Features';
import Footer from '../Components/Footer';
import Header1 from '../Components/Header/Header1';
import Header2 from '../Components/Header/Header2';
import HeroSection from '../Components/HeroSection';
import Testimonials from '../Components/Testimonial';
import Banner from '../Components/Banner';
import Reviews from '../Components/Reviews';

function Homepage() {
  return (
    <div className='w-full'>
       <Header1 />
       {/* <Header2/> */}
       <HeroSection/>
      <WhyChooseUs/>
      <Banner/>
      <BestSellers/>
      <AboutUs/>
      <Testimonials/>
 
      <Footer/>
    
    </div>
  )
}

export default Homepage
