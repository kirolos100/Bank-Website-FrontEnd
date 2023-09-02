import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Features</span>
            </h1>
            <p>U.S. Bancorp is the parent company of U.S. Bank National Association, the fifth-largest commercial bank in the United States. We're headquartered in Minneapolis, Minnesota and operate more than 2,000 bank branches in 26 states.</p>
            <p>Our team of more than 70,000 employees serve our millions of retail, business, wealth management, payment, commercial and corporate, and investment services customers across the country and around the world, With a diversified mix of business lines generating $23 billion in annual revenue, we're strategically positioned in our industry, reaching $559 billion in assets. </p>
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='/images/about(1).jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
