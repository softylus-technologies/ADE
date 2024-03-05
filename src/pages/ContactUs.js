import React from 'react';

import Layout from "../components/layout";
import "../components/style/ContactUs.css";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
const ContactUs = ( proops ) => { 
    const mapStyles = {
        width: '100%',
        height: '450px',
    };

    const position = {lat: 25.1873, lng: 55.2744};

    return (
        <Layout>
            <section className='contact-hero-sec'>
                <div className='contact-hero-container'>
                    <div className='contact-hero-title'>
                        <h1>Contact</h1>
                        <h1>us</h1>
                    </div>
                    <div className='contact-hero-p'>
                        <p>Need more information? Give us a call or fill up the form below.</p>
                    </div>
                </div>
            </section>
            <section className='form-hero-sec'>
                <div className='form-hero-container'>
                    <div className='form-hero-map'>
                    <APIProvider apiKey={'AIzaSyAUOQUcvKESf8w4AobaXLdh56y3eR8QXKw'}>
                        <Map center={position} zoom={14}>
                            <Marker position={position} />
                        </Map>
                        </APIProvider>
                    </div>
                    <form>
                        <input placeholder='Enter your name' type='text'/>
                        <input placeholder='Enter your Email' type='Email'/>
                        <textarea placeholder='Message' type='text'/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
            <img src='/Frame 54 (1).png' className='banner-about' />
        </Layout>
    );
};


export default ContactUs;