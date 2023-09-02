import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to grow your business
          </h1>
          <p>The modern bank refers to an institution having the following characteristics: Bank deals with money: it accepts deposits and advances loans. Bank also deals with credit: it has the ability to create credit by expanding its liabilities. Bank is commercial institution: it aims at earning profit.</p>
          <p>“Accepting of deposits of money from public for the purpose of Lending or Investment, repayable on demand or otherwise and withdrawable by cheque, draft, or otherwise”</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/about(2).jpeg' alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
