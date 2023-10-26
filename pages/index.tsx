import { FeatureDetails, Features, Footer, Hero, NavBar, SEO, WhyDensity } from 'components'
import React, { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..


const Home = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1000,
      once: false,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <ParallaxProvider>
      <div className='bg-gray'>
        <SEO title="Density Exchange: Trade in future" />
        <NavBar />
        <Hero />
        <Features />
        <WhyDensity />
        <FeatureDetails />
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export default Home