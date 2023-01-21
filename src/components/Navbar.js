import React from 'react'
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";

export default function Navbar() {
    const { logOut} = useUserAuth();
  const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/login");
        } catch (error) {
          console.log(error.message);
        }
      };

    
  return (
    <header className="site-navbar mt-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="site-logo col-6"><a href="index.html">Brand</a></div>

          <nav className="mx-auto site-navigation">
            <ul className="site-menu js-clone-nav d-none d-xl-block ml-5 pl-5">
              <li><a href="/" className="nav-link active"></a></li>
              <li><a href="about.html" className='ml-5 pl-5'>About</a></li>
              <li className="has-children">
                <a href="job-listings.html">Job Listings</a>
                <ul className="dropdown">
                  <li><a href="job-single.html">Job Single</a></li>
                  <li><a href="post-job.html">Post a Job</a></li>
                </ul>
              </li>
              <li className="has-children">
                <a href="services.html">Pages</a>
                <ul className="dropdown">
                  <li><a href="services.html">Services</a></li>
                  <li><a href="service-single.html">Service Single</a></li>
                  <li><a href="blog-single.html">Blog Single</a></li>
                  <li><a href="portfolio.html">Portfolio</a></li>
                  <li><a href="portfolio-single.html">Portfolio Single</a></li>
                  <li><a href="testimonials.html">Testimonials</a></li>
                  <li><a href="faq.html">Frequently Ask Questions</a></li>
                  <li><a href="gallery.html">Gallery</a></li>
                </ul>
              </li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
              
            
            <button onClick={handleLogout} className="  col-1 btn btn-outline-white border-width-2 d-none d-lg-inline-block mr-2 icon-lock_outline">Sign out</button>
          </ul>
        

          </nav>
          
        

        </div>
      </div>
    </header>
  )
}
