import React from 'react'
import { Link } from "gatsby"
import "./style/SecFooter.css"
const SecFooter = () => {
  return (
   <section className='Sec-Footer'>
    <div className='Sec-Footer-container'>
        <div className='Sec-Footer-content'>
            <h1>Join us virtually today.</h1>
            <p>Schedule an online session today.</p>
            <Link to='/book-now'><button>BOOK NOW</button></Link>
        </div>
    </div>
   </section>
  )
}

export default SecFooter