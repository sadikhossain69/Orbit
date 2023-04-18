import React from 'react';

const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-md custom_navs ">
        <div class="container">
          <a class="navbar-brand navbs_logo" href="contact.html">
            <img src="image/orbit_logo.png" alt="" srcset=""/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <i class="fas fa-bars barsss"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto navbar_items">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#Hero_part">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#service_part">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#Latest_projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#Team_part">Our Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="contact.html">Contact</a>
              </li>




            </ul>

          </div>
        </div>
      </nav>
        </>
    );
};

export default Navbar;