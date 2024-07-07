import React from 'react'
import Layout from "../components/layout"
import "../components/style/book-now.css"
import Seo from '../components/seo'
const booknow = () => {
  return (
   <Layout>
    <Seo/>
          <section className='about-hero-sec'>
            <div className='about-hero-container'>
                <div className='about-hero-title'>
                    <h1>Schedule</h1>
                    <h1>a Call</h1>
                    <h1>with us</h1>
                    
                    <h1 className='mobile-aboutUs'>Schedule a Call with us</h1>
                </div>
                <div className='about-hero-img'>
                    <img src='/greensgate 1.svg'/>
                </div>
            </div>
        </section>
        <section className='booknow-sec'>
            <div className='booknow-container'>
            <form className='booknow-form'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email Address' />
                <input type='tel' placeholder='Mobile Number' />
                <div className='booknow-form-single-line'>
                    <input type='date' placeholder='Preferred Date' className='Preferred-Date' />
                    <input type='text' placeholder='Preferred Time' className='Preferred-Time' />
                </div>
                <div className='booknow-form-single-line'>
                    <button>ZOOM CALL</button>
                    <button>MICROSOFT TEAMS</button>
                </div>
                <button className='booknow-submit' type='submit'>Submit Your Inquiry</button>
            </form>
                    <div className='booknow-img'>
                        <img src="/Lobby 2.jpg" alt="Lobby" />
                    </div>
            </div>
        </section>
   </Layout>
  )
}

export default booknow
