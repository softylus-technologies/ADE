import React from 'react'
import SecFooter from "../components/SecFooter"
import Layout from "../components/layout"
import "../components/style/Projects.css"
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
const Projects = () => {
  return (
  <Layout>
    <Seo 
    title=" Deansgate by ADE Properties | Luxury Apartments in Majan, Dubai"
    metaDescription="Discover Deansgate by ADE Properties, a luxurious architectural marvel in Majan, Dubai. Offering Studios, 1 BHK, 2 BHK, 3 BHK, and 4 BHK residences with retail shops, embodying innovation, excellence, and ADE's legacy."/>
    <section className='Projects-hero-sec'>
      <div className='Projects-hero-container'>
        <div className='Projects-hero-title'>
          <h1>ade</h1>
          <h1>properties</h1>
          <h1>projects</h1>
        </div>
      </div>
    </section>
    <StaticImage src='../../static/Entrance 3 (1).png' className='Projects-banner'/>
    <section className='Deansgate-sec'>
      <div className='Deansgate-container'>
        <div className='Deansgate-content'>
          <h1>Deansgate by <img src='/Frame 2.svg'/></h1>
          <span>Affordable • Luxurious • Exceptional</span>
          <p>Deansgate by ADE is a captivating architectural masterpiece nestled in the heart of Majan, Dubai. This contemporary marvel stands tall, boasting a dynamic structure that seamlessly integrates modern living with commercial convenience, from its inviting ground floor to 10 floors of Residential spaces.<br/> 
            Including Studios, 1 BHK, 2 BHK, 3 BHK, and 4 BHK residences, each meticulously designed to cater to your unique lifestyle. But that`s not all - with retail shops at your doorstep, Deansgate promises a vibrant, all-compassing urban experience like no other. Experience the ideal modern living in Majan, Dubai.</p>
        </div>
        <div className='Deansgate-card'>
          <div className='Deansgate-single-card'>
            <StaticImage src='../../static/Lobby 1.png'/>
            <h3>design</h3>
            <p>The hyper property embodies the essence of its name. Similar to the exquisite gemstone, they hyper property is a rare and well crafted offering that radiates warmth and elegance.</p>
          </div>
          <div className='Deansgate-single-card'>
            <StaticImage src='../../static/Frame 56.png'/>
            <h3>details</h3>
            <p>From the aerodynamic strokes of the hyper property to the exquisite exterior, every angle of Deansgate is designed to evoke a sense of style and elegance that is derived from ADE’s brand ethos.</p>
          </div>
          <div className='Deansgate-single-card'>
            <StaticImage src='../../static/Frame 57.png'/>
            <h3>distinction</h3>
            <p>Deansgate features a unique and striking facade that captures essence of its name and the brand. The interior of the hyper property is equally stunning, creating a sense of sophistication to the discerning residents.</p>
          </div>
        </div>
      </div>
    </section>
    {/* <StaticImage src='../../static/Frame 12.png' className='Projects-banner'/> */}
    {/* <section className='Greensgate-sec'>
      <div className='Greensgate-container'>
        <div className='Greensgate-title'>
          <h1>Greensgate by ADE</h1>
          <p>Greensgate by ADE is a visionary residential project situated in the vibrant area of Jumeirah Village Circle (JVC), Dubai. Redefining urban living, Greensgate is set to ascend with a captivating architectural design that blends sophistication and functionality. The building features a ground floor along with 4 podium levels and 15 residential floors, offering panoramic views of the city skyline.<br/> 
Greensgate by ADE is designed to have both Studios and 1-bedroom residences, as construction is scheduled to commence in Q1 2024, future residents can anticipate the epitome of modern living in one of Dubai’s most dynamic neighborhoods.</p>
        </div>
        <div className='Greensgate-image'>
          <div className='Greensgate-duolImage'>
            <StaticImage src='../../static/Lobby 1 (1).png'/>
            <StaticImage src='../../static/Lobby 1 (2).png'/>
          </div>
          <StaticImage src='../../static/Shared pool 2.png'/>

        </div>
      </div>
    </section> */}
    <section className='JVC-sec'>
      <div className='JVC-container'>
        <h1>
        OUR UPCOMING PROJECTS
        </h1>
        <div className='JVC-Coming-Soon'>
            <h1>
              COMING SOON
            </h1>
            <h1>
              IN JVC AND MAJAN
            </h1>
        </div>
      </div>
    </section>
    <SecFooter/>
  </Layout>
  )
}

export default Projects