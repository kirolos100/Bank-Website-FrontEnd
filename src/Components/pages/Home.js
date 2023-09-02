import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import MostPopular from "../HomeSection/popular/MostPopular"
import Certificate from "../HomeSection/certific/Certificate"
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/Works/Works"
import Gallery from "../HomeSection/gallery/Gallery"

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <Certificate />
      <Download />
      <Works />
      <Gallery />
    </>
  )
}

export default Home
