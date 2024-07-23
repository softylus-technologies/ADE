import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../components/layout";
import "../components/style/ContactUs.css";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import Popup from '../components/Popup';
import successfully from "../../static/successfully.json";
import failed from "../../static/failed.json";
const ContactUs = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [popup, setPopup] = useState({ show: false, message: '', type: '', img: null });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const baseUrl = 'https://ade-strapi.softylus.com/api/contact-uses';
        const token = 'ee6bec4829327867391d7638db6d674719c2cd75af74273e4cfaec096284d58c6c1561075e4021e9ce948fd5a6a3bb6082d1993f0b7b66371d04ab85f79e732a01bf959b1e9326937171b5e84cbae49c072efa32095287ddebe2fe15cef8009f4bb2a1e0de9d8723fd68ef812577c21a8f11646b38fa509d36de49b203318e5b';
    
        const dataToSend = {
            data: formData
        };
    
        try {
            const response = await axios.post(baseUrl, dataToSend, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            
            console.log('Form submitted successfully:', response.data);
            setFormData({ name: '', email: '', message: '' });
            setPopup({
                show: true,
                message: 'Your message has been sent successfully!',
                type: 'success',
                img: successfully
            });
        } catch (error) {
            console.error('Error submitting form:', error.response?.data || error);
            setPopup({
                show: true,
                message: 'An error occurred while sending your message. Please try again.',
                type: 'error',
                img: failed
            });
        }
    };

    const closePopup = () => {
        setPopup({ show: false, message: '', type: '', img: null });
    };
    const mapStyles = {
        width: '100%',
        height: '450px',
    };

    const position = {lat: 25.1858, lng: 55.2730};


    return (
        <Layout>
            <section className='contact-hero-sec'>
                <div className='contact-hero-container'>
                    <div className='contact-hero-title'>
                        <h1>Contact</h1>
                        <h1>us</h1>
                    </div>
                </div>
            </section>
            <section className='form-hero-sec'>
                <div className='form-hero-container'>
                    <div className='form-hero-map'>
                        <APIProvider apiKey={'AIzaSyAUOQUcvKESf8w4AobaXLdh56y3eR8QXKw'} className="form-map">
                            <Map center={position} zoom={14}>
                                <Marker position={position} />
                            </Map>
                        </APIProvider>
                        <div className='form-data'>
                            <p><img src='/VectorAc.png' alt="Address icon"/>Address Offices 302 & 303, Building 8, Bay Square, Business Bay P.O. box 4009 , Dubai, UAE</p>
                            <p><img src='/VectorAv.png' alt="Phone icon"/> +971 4 572 2220</p>
                            <p><img src='/VectorAb.png' alt="Email icon"/>info@adeproperties.ae</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='contact-hero-p'>
                            <p>Need more information? Give us a call or fill up the form below.</p>
                        </div>
                        <input 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter your name' 
                            type='text'
                            required
                        />
                        <input 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter your Email' 
                            type='email'
                            required
                        />
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Message' 
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
            <img src='/Frame 54 (1).png' className='banner-about' alt="Banner" />
            {popup.show && (
                <Popup
                    message={popup.message}
                    type={popup.type}
                    onClose={closePopup}
                    img={popup.img}
                />
            )}
        </Layout>
    );
};

export default ContactUs;