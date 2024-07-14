import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SecFooter from "../components/SecFooter"
import Layout from "../components/layout"
import "../components/style/AboutUs.css"
import Seo from '../components/seo'
const AboutUs = () => {
  return (
    <Layout>
      <Seo
      title="About ADE Properties - Leading Real Estate Development Company"
      metaDescription="Discover ADE Properties, a dynamic property development company within Al Dallal Group, known for excellence in UAE’s real estate sector. Learn about our legacy, leadership, and commitment to innovation."/>
        <section className='about-hero-sec'>
            <div className='about-hero-container'>
                <div className='about-hero-title'>
                    <h1>more</h1>
                    <h1>About <br/>Us</h1>
                    
                    <h1 className='mobile-aboutUs'> About Us</h1>
                </div>
                <div className='about-hero-img'>
                    <img src='/greensgate 1.svg'/>
                </div>
            </div>
        </section>
        <section className="about-Properties-sec">
      <div className="about-Properties-container">
        <div className="about-Properties-title">
          <p>ADE Properties, a dynamic property development company, operates within the esteemed Al Dallal Group, an Emirati-owned business. Al Dallal Real Estate serves as its leasing division, specializing in leasing the properties owned by the group. The group, with a legacy dating back to 1951, has been a cornerstone in the UAE’s real estate sector.</p>
          <p>ADE Properties, born out of our commitment to innovation and excellence in property development, stands as a testament to our enduring legacy. Founded under the leadership of Ahmad Mohd Al Dallal and Mahmood Mohd Al Dallal, sons of the late Mohammed Mahmood Al Dallal, ADE Properties represents a new chapter in our legacy.</p>
          <p>Rooted in the wisdom and vision of the late Mohammed Mahmood Al Dallal, a widely regarded advisor and landlord in real estate, ADE Properties carries forward a rich tradition of excellence.</p>
        </div>
        <div className="about-Properties-heading">
        <h1>ADE</h1>
        <h1>Properties</h1>
        </div>
      </div>
    </section>
    <section>
        <div>
            
        </div>
    </section>
    <section className='personal-sec'>
      <div className='personal-container'>
        <div className='personal-content'>
          <p>Saeed Mahmood Al Dallal and Mohammed Ahmad Al Dallal, both distinguished Emirati Nationals, serve as the accomplished Managing Directors of ADE Properties, a leading force in the real estate industry.With a wealth of experience in managing and developing real estate projects, their expertise is unparalleled in the field. </p>
          <p style={{ marginTop: "30px" }}>Saeed Mahmood Al Dallal and Mohammed Ahmad Al Dallal are renowned for their unwavering commitment to delivering top-notch quality in all their projects. 
          Their keen attention to detail and dedication to upholding the highest standards are evident in every endeavor. What truly sets them apart, however, is their remarkable ability to consistently ensure the timely completion and delivery of projects, an attribute that has earned them widespread acclaim and trust in the industry</p>
        </div>
        {/* <div className='personal-card'>
          <div className='personal-single-card'>
            <img src='/Rectangle 7.png'/>
            <h3>Saeed Mahmood Al Dallal</h3>
            <p>Director ADE Properties</p>
          </div>
          <div className='personal-single-card'>
            <img src='/Rectangle 8.png'/>
            <h3>Mohammed Mahmood Al Dallal</h3>
            <p>Manager Director ADE Properties</p>
          </div>
        </div> */}
      </div>
    </section>
    <img src='/Frame 54 (1).png' className='banner-about' />
        <SecFooter/>
    </Layout>
  )
}

export default AboutUs