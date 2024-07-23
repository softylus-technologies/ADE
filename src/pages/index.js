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
      <button onClick={() => swiper.slidePrev()} className=''><StaticImage src='/arrow-circle-left.svg' /></button>
      <button onClick={() => swiper.slideNext()} className=''><StaticImage src='/arrow-circle-right.svg' /></button>
    </div>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <section className="homePage-hero-sec">
        <div className="homePage-hero-container">
          <div className="homePage-hero-content">
            <h1>Innovation.</h1>
            <h1>Excellence.</h1>
            <h1>Legacy.</h1>
          </div>
        </div>
      </section>
      <section className="Home-Properties-sec">
        <div className="Home-Properties-container">
          <div className="Home-Properties-title">
            <h1>ADE Properties</h1>
            <p>A dynamic property development company, operates within the esteemed Al Dallal Group, an Emirati-owned business. </p>
            <p>Al Dallal Real Estate serves as its leasing division, specializing in leasing the properties owned by the group. The group, with a legacy dating back to 1951, has been a cornerstone in the UAE’s real estate sector.</p>
            <Link to="/AboutUs"><button>MORE ABOUT US</button></Link>
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
                900: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1070:{
                  slidesPerView: 2 ,
                  spaceBetween: 50,
                },
                
                1300: {
                  slidesPerView: 2.5,
                  spaceBetween: 50,
                },
                1640:{
                  slidesPerView: 3.5,
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
              <SwiperSlide className="swiper-Discover-Slide"><h1>02</h1><img src='/Lobby 2.jpg' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>03</h1><img src='/Full facade_night 1.svg' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>04</h1><img src='/Frame 56.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>05</h1><img src='/Frame 57.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>06</h1><img src='/greensgate 1.png' alt="Slide" /></SwiperSlide>
              <SwiperSlide className="swiper-Discover-Slide"><h1>07</h1><img src='/Frame 54 (1).png' alt="Slide" /></SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </section>
      <section className="amenities-sec ">
        <h1>AMENITIES</h1>
        <div className="amenities-container hide-ipad">
          <div className="single-row">
            <div className="single-amenities">
                <img src="/Mask group (1).png"/>
                <h2>Gazebo Sitting</h2>
            </div>
            <div className="Divider"></div>
            <div className="single-amenities">
                <img src="/hugeicons--equipment-gym-03 1.png"/>
                <h2>Outdoor Gym</h2>
            </div>
            <div className="Divider"></div>

            <div className="single-amenities">
                <img src="/maki--water 1.png"/>
                <h2>Water Feature</h2>
            </div>
            <div className="Divider"></div>
          
            <div className="single-amenities ">
                <img src="/material-symbols-light--directions-run-rounded 1.png"/>
                <h2>Outdoor Running Track</h2>
            
            
            </div>
            </div>
            <div  className="single-row">
            <div className="single-amenities">
                <img src="/icon-park-outline--xiaodu-home 1.png"/>
                <h2>Home Automation</h2>
            </div>
            <div className="Divider"></div>

            <div className="single-amenities">
                <img src="/Mask group (2).png"/>
                <h2>Kids 
                Swimming Pool</h2>
            </div>
            <div className="Divider"></div>

          
            <div className="single-amenities">
                <img src="/material-symbols-light--directions-car-outline-rounded 1.png"/>
                <h2>Parking</h2>
            </div>
            <div className="Divider"></div>

            <div className="single-amenities ">
                <img src="/Mask group (3).png"/>
                <h2>
                  BBQ Area</h2>
            </div>
            </div>
            <div  className="single-row">
            <div className="single-amenities">
                <img src="/mdi--gym 1.png"/>
                <h2>Indoor Gym</h2>
            </div>
            <div className="Divider"></div>

          
            <div className="single-amenities">
                <img src="/Mask group (4).png"/>
                <h2>Outdoor Swimming Pool</h2>
            </div>
            <div className="Divider"></div>

            <div className="single-amenities">
                <img src="/Mask group (5).png"/>
                <h2>Kids Play Area</h2>
            </div>
            <div className="Divider"></div>

            <div className="single-amenities ">
                <img src="/material-symbols-light--chair-alt-rounded 1.png"/>
                <h2>Outdoor Seats</h2>
            </div>
          </div>
        </div>
        <div className="amenities-container hide-pc">
        <Swiper
                className="swiper-amenities "
                breakpoints={{
                  375:{
                    slidesPerView: 1.5,
                  },
                  600:{
                    slidesPerView: 1.5,
                  },
                  787:{
                    slidesPerView: 2,
                  },
                  820: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1300: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                  },
                  1640: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                spaceBetween={0}
                direction="horizontal"
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => console.log('slide change')}
              >
                
                  <SwiperSlide>
                     <div className="single-amenities">
                <img src="/Mask group (1).png"/>
                <h2>Gazebo Sitting</h2>
            </div>
            <div className="Divider"></div>
            <div className="single-amenities">
                <img src="/hugeicons--equipment-gym-03 1.png"/>
                <h2>Outdoor Gym</h2>
            </div>
            <div className="Divider"></div>

                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-amenities">
                <img src="/maki--water 1.png"/>
                <h2>Water Feature</h2>
            </div>
            <div className="Divider"></div>
          
            <div className="single-amenities ">
                <img src="/material-symbols-light--directions-run-rounded 1.png"/>
                <h2>Outdoor Running Track</h2>
            </div>
            <div className="Divider"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="single-amenities">
                <img src="/icon-park-outline--xiaodu-home 1.png"/>
                <h2>Home Automation</h2>
            </div>
            <div className="Divider"></div>

            <div className="single-amenities">
                <img src="/Mask group (2).png"/>
                <h2>Kids 
                Swimming Pool</h2>
            </div>
            <div className="Divider"></div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="single-amenities">
                <img src="/material-symbols-light--directions-car-outline-rounded 1.png"/>
                <h2>Parking</h2>
            </div>
            <div className="Divider"></div>

            <div className="single-amenities ">
                <img src="/Mask group (3).png"/>
                <h2>
                  BBQ Area</h2>
            </div>
            <div className="Divider"></div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="single-amenities">
                <img src="/mdi--gym 1.png"/>
                <h2>Indoor Gym</h2>
            </div>
            <div className="Divider"></div>

          
            <div className="single-amenities">
                <img src="/Mask group (4).png"/>
                <h2>Outdoor Swimming Pool</h2>
            </div>
            <div className="Divider"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="single-amenities">
                <img src="/Mask group (5).png"/>
                <h2>Kids Play Area</h2>
            </div>
            <div className="Divider"></div>

            <div className="single-amenities ">
                <img src="/material-symbols-light--chair-alt-rounded 1.png"/>
                <h2>Outdoor Seats</h2>
            </div>
            <div className="Divider"></div>

                  </SwiperSlide>
                  
                
              </Swiper>
              </div>
      </section>

      <section className="swiper-video-sec">
        <div className="swiper-video-container">
          <div className="swiper-video-swiper">
          <div className="swiper-video-content">
                <div className="swiper-video-title">
                  <h1>Feature videos</h1>
                </div>
             </div>
             <div className="swiper-video-frame">
                <div className="swiper-video-video">
                  <video src="/ec9f4365-6487-461c-9481-deeb649cb058 (1).mp4" controls poster="/image.png" Autoplay > </video>
                </div>
             </div>
          {/* <Swiper
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
            </Swiper> */}
          </div>
        </div>
      </section>
      <SecFooter />
    </Layout>
  )
}

export const Head = () => <Seo title="ADE Properties | Luxury Real Estate Development in UAE" metaDescription="Discover ADE Properties, a dynamic property development company within the esteemed Al Dallal Group. Specializing in luxury living, we offer meticulously designed residences with a range of amenities in prime locations. Contact us today to explore our innovative, excellent, and legacy-driven approach to real estate." />

export default IndexPage
