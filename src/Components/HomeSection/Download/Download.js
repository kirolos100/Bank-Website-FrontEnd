import React from "react"
import "./download.css"

const Download = () => {
  return (
    <>
      <section className='download top'>
        <div className='container flex_space'>
          <div className='row'>
            <h3>Download our app</h3>
            <h1>Wow! Get This Templete App For Your Mobile</h1>
            <ul>
              <li>&#10003; Self-subscribe to internet/mobile banking services - retail customers.</li>
              <li>&#10003;Activate Soft Token - retail customers.</li>
              <li>&#10003; Biometric authentication (Face ID - Touch ID) to sign in.</li>
              <li>&#10003; Apply for unsecured credit card and follow up the application - retail customers.</li>
              <li>&#10003; Apply for unsecured personal loan /auto loan and follow up the application - retail customers.</li>
              <li>&#10003; One-time Transfer service (without adding a beneficiary).</li>
              <li>&#10003; submit I-Score inquiry and download it in PDF format.</li>
            </ul>
            <div className='img flex'>
              <img src='/images/appstore-button.png' alt='' />
              <img src='/images/google-play-button.png' alt='' />
            </div>
          </div>
          <div className='row row2'>
            <img src='/images/down.jpg' alt='' className='image' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Download
