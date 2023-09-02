import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>it's a Demo Website developped by Kirollos Saleh.</p>
            <br />
            <p>it's a Demo Website developped by Kirollos Saleh</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/Transfer'>Transfer</Link>
              </li>
              <li>
                <Link to='/Certificates'>Certifactes</Link>
              </li>
              <li>
                <Link to='/Balance'>Balance</Link>
              </li>
              <li>
                <Link to='/FeedBack'>FeedBack</Link>
              </li>
              <li>
                <Link to='/Customer Service'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>it's a Demo Website developped by Kirollos Saleh</p>
                <label className='fa fa-calendar-alt'></label>
                <span>27 Aug 2023</span>
              </li>
              <li>
                <p>it's a Demo Website developped by Kirollos Saleh</p>
                <label className='fa fa-calendar-alt'></label>
                <span>27 Aug 2023</span>
              </li>
              <li>
                <p>it's a Demo Website developped by Kirollos Saleh</p>
                <label className='fa fa-calendar-alt'></label>
                <span>27 Aug 2023</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>it's a Demo Website developped by Kirollos Saleh</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
