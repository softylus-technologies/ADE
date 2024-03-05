import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SecFooter from "../components/SecFooter"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/style/index.css"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="btn-sliider">
      <button onClick={() => swiper.slidePrev()} className=''><img src='/arrow-circle-left.svg' /></button>
      <button onClick={() => swiper.slideNext()} className=''><img src='/arrow-circle-right.svg' /></button>
    </div>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <section className="homePage-hero-sec">
        <div className="homePage-hero-container">
          <div className="homePage-hero-content">
            <h1>Affordable. </h1>
            <h1>Luxurious. </h1>
            <h1>Exceptional.</h1>
          </div>
        </div>
      </section>
      <section className="Home-Properties-sec">
        <div className="Home-Properties-container">
          <div className="Home-Properties-title">
            <h1>ADE Properties</h1>
            <p>A dynamic property development company, operates within the esteemed Al Dallal Group, an Emirati-owned business. </p>
            <p>Al Dallal Real Estate serves as its leasing division, specializing in leasing the properties owned by the group. The group, with a legacy dating back to 1951, has been a cornerstone in the UAE’s real estate sector</p>
            <Link to="/ContactUs"><button>CONTACT US</button></Link>
          </div>
          <div className="Home-Properties-img">
            <img src="/Lobby 2.jpg" alt="Lobby" />
          </div>
        </div>
      </section>
      <section className="swiper-Discover-sec">
        <div className="swiper-Discover-container">
          <div className="swiper-Discover-swiper">
            <Swiper className="swiper-Discover"
              breakpointsInverse={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 50,
                },
                1030: {
                  slidesPerView: 2.5,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              pagination={{ clickable: true }} // Enable pagination and make the bullets clickable.

              spaceBetween={0}
              direction="horizontal"

              scrollbar={{ draggable: true }}

              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
             
            >
              <div className="swiper-Discover-content">
                <div className="swiper-Discover-title">
                  <h1>Discover a New Standard of Luxury Living</h1>
                  <p>Our expert team meticulously designs each residence to maximize space, functionality, and aesthetic appeal. We believe that attention to detail is key in creating homes that reflect sophistication and provide a truly elevated living experience. </p>
                </div>
                <SliderButtons />
             </div>
              <SwiperSlide className="swiper-Discover-Slide"><h1>01</h1><img src='/Frame 36.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>02</h1><img src='/Frame 36.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>03</h1><img src='/Frame 36.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>04</h1><img src='/Frame 36.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>05</h1><img src='/Frame 36.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>06</h1><img src='/Frame 36.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>07</h1><img src='/Frame 36.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>08</h1><img src='/Frame 36.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>09</h1><img src='/Frame 36.png' alt="Slide" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="swiper-video-sec">
        <div className="swiper-video-container">
          <div className="swiper-video-swiper">
          <Swiper
            className="swiper-video"
            breakpointsInverse={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              1030: {
                slidesPerView: 1.2,
                spaceBetween: 50,
              },
            }}
            
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            pagination={{ clickable: true }} // Enable pagination and make the bullets clickable.

            direction="horizontal"
            onSwiper={(swiper) => console.log(swiper)}
          >
                        <div className="swiper-video-content">
                <div className="swiper-video-title">
                  <h1>Feature videos</h1>
                </div>
             </div>
             <SwiperSlide className="swiper-video-Slide">
              <iframe 
                src="https://www.youtube.com/embed/KgyzKTrQDs0" 
                title="YouTube video"
                width="100%" 
                height="630" 
                allowFullScreen

                
              />
            </SwiperSlide><SwiperSlide className="swiper-video-Slide">
              <iframe 
                src="https://www.youtube.com/embed/KgyzKTrQDs0" 
                title="YouTube video"
                width="560" 
                height="315" 
                allowFullScreen
              />
            </SwiperSlide><SwiperSlide className="swiper-video-Slide">
              <iframe 
                src="https://www.youtube.com/embed/KgyzKTrQDs0" 
                title="YouTube video"
                width="560" 
                height="315" 
                allowFullScreen
              />
            </SwiperSlide><SwiperSlide className="swiper-video-Slide">
              <iframe 
                src="https://www.youtube.com/embed/KgyzKTrQDs0" 
                title="YouTube video"
                width="560" 
                height="315" 
                allowFullScreen
              />
            </SwiperSlide><SwiperSlide className="swiper-video-Slide">
              <iframe 
                src="https://www.youtube.com/embed/KgyzKTrQDs0" 
                title="YouTube video"
                width="560" 
                height="315" 
                allowFullScreen
              />
            </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <SecFooter />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
