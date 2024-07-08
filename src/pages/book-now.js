import React, { useState } from 'react'
import axios from 'axios'
import Layout from "../components/layout"
import "../components/style/book-now.css"
import Seo from '../components/seo'
import Popup from '../components/Popup'
import successfully from "../../static/successfully.json"
import failed from "../../static/failed.json"
const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    preferredDate: '',
    preferredTime: '',
    callType: ''
  });
  const [popup, setPopup] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCallTypeSelect = (type) => {
    setFormData({
      ...formData,
      callType: type
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const baseUrl = 'https://ade-strapi.softylus.com/api/book-nows';
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
      setFormData({ name: '', email: '', mobileNumber: '', preferredDate: '', preferredTime: '', callType: '' });
      setPopup({
        show: true,
        message: 'Your inquiry has been submitted successfully!',
        img:successfully,
        type: 'success'
      });
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error);
      setPopup({
        show: true,
        img:failed,
        message: 'An error occurred while submitting your inquiry. Please try again.',
        type: 'error'
      });
    }
  };

  const closePopup = () => {
    setPopup({ show: false, message: '', type: '' });
  };

  return (
    <Layout>
      <Seo
        title="Schedule a Call with ADE Properties - Book Now"
        metaDescription="Schedule a call with ADE Properties. Fill out the form with your name, email address, mobile number, preferred date, and time. Choose between Zoom Call and Microsoft Teams. Submit your inquiry now."
      />
      <section className='about-hero-sec'>
        <div className='about-hero-container'>
          <div className='about-hero-title'>
            <h1>Schedule</h1>
            <h1>a Call</h1>
            <h1>with us</h1>
            <h1 className='mobile-aboutUs'>Schedule a Call with us</h1>
          </div>
          <div className='about-hero-img'>
            <img src='/greensgate 1.svg' alt="Greensgate" />
          </div>
        </div>
      </section>
      <section className='booknow-sec'>
        <div className='booknow-container'>
          <form className='booknow-form' onSubmit={handleSubmit}>
            <input type='text' name="name" value={formData.name} onChange={handleChange} placeholder='Name' required />
            <input type='email' name="email" value={formData.email} onChange={handleChange} placeholder='Email Address' required />
            <input type='tel' name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder='Mobile Number' required />
            <div className='booknow-form-single-line'>
              <input type='date' name="preferredDate" value={formData.preferredDate} onChange={handleChange} placeholder='Preferred Date' className='Preferred-Date' required />
              <input type='time' name="preferredTime" value={formData.preferredTime} onChange={handleChange} placeholder='Preferred Time' className='Preferred-Time' required />
            </div>
            <div className='booknow-form-single-line'>
              <button type="button" onClick={() => handleCallTypeSelect('ZOOM')} className={formData.callType === 'ZOOM' ? 'selected' : ''}>ZOOM CALL</button>
              <button type="button" onClick={() => handleCallTypeSelect('TEAMS')} className={formData.callType === 'TEAMS' ? 'selected' : ''}>MICROSOFT TEAMS</button>
            </div>
            <button className='booknow-submit' type='submit'>Submit Your Inquiry</button>
          </form>
          <div className='booknow-img'>
            <img src="/Lobby 2.jpg" alt="Lobby" />
          </div>
        </div>
      </section>
      {popup.show && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={closePopup}
          img={popup.img}

        />
      )}
    </Layout>
  )
}

export default BookNow