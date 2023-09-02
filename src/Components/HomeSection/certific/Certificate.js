import React from "react"
import "../popular/MostPopular.css"
//import Dcards from "../../Destinations/Dcards"
import AllItem from "../../Certificates/AllItem"

const Certificate = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>Our Saving Certificates</h1>
            <div className='line'></div>
          </div>

          <div className='content'>
            <AllItem />
          </div>
        </div>
      </section> 
    </>
  )
}

export default Certificate
