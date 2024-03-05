/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./style/layout.css"
import { Link } from "gatsby"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <footer className="footer-sec">
          <div className="footer-container">
            <div className="footer-logo">
              <img src="/Frame 2.svg"/>
              <p>Affordable. Luxurious. Exceptional.</p>
            </div>
            <div className="footer-links">
              <h2>REACH US</h2>
              <Link to={`tel:+977654235`}>
                <img src="/call-calling.svg" alt="Call"/>+977654235
              </Link>
              <Link to={`mailto:info@adeproperties.ae`}>
                <img src="/sms.svg" alt="Email"/>info@adeproperties.ae
              </Link>
            
              <Link to={`https://www.google.com/maps/search/?api=1&query=SHEIKH+ZAYED+ROAD,+DUBAI,+UAE+341186`}>
                <img src="/location.svg" alt="Location"/>SHEIKH ZAYED ROAD, DUBAI, UAE 341186
              </Link>
            </div>
            <div className="footer-links ">
              <h2>QUICK LINKS</h2>
              <div className="footer-link-page">
              <div>
                <Link to="../../../../">Home</Link>
                <Link to="/Projects">projects</Link>
                <Link to="">rent</Link>
            </div>
            <div>
              <Link to="/AboutUs">about us</Link>
              <Link to="/ContactUs">contact us</Link>
            </div>
            </div>
            </div>
            <div className="footer-links">
              <h2>FOLLOW US</h2>
              <div className="social-icons">
                
              <Link to=""><img src="/Vector.svg"/></Link>
              <Link to=""><img src="/Vector (1).svg"/></Link>
              <Link to=""><img src="/Vector (2).svg"/></Link>

              </div>
              <p>privacy policy</p>
              <p>terms of use</p>   
            </div>
          </div>
        </footer>
     
    </>
  )
}

export default Layout
