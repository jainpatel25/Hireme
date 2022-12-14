import React from 'react'
import HeroSection from './Components/HeroSection'

const About = () => {
  const data = {
    name: "Jain Patel",
    image: "./images/about1.svg"
  }
  return <HeroSection {...data} />;
}

export default About