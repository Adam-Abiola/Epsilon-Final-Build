import '../main.js';


//import Image from './images/';

//import Image from "next/image";
import styles from './styles/styles.module.scss';

import Head from 'next/head'
import Script from 'next/script';
import React from 'react';
import Aos from 'aos';


const images = {
    'cemex_all': require('../images/cemex_all.png').default,
    '1': require('../images/1.png').default,
    'client_cemex': require('../images/client_cemex.png').default,
    'cta-bg': require('../images/cta-bg.jpg').default,
    'favicon-epsilon': require('../images/favicon-epsilon.png').default

};


const Header: React.FC = () => {
    return (
        <header>

            <Head>

                {/* Hello world */}
                <div className="awesome" style={{ border: "1px solid red" }}>
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" id="name" />
                </div>
                <p>
                    <title>Epsilon Development Labs - Home</title>
                    <meta
                        name="description"
                        content="Epsilon Development Labs is a full-service development agency.
          With us, you'll get high-quality code, smart designs, and an
          experienced team that's ready to help you build your idea into
          reality."
                    />
                    <meta name="author" content="Udochukwu Okoro" />
                    <meta
                        name="google-site-verification"
                        content="Ke7ubyFTpJ8jVmmcn961F-FQy0SHWmz0Feb95F8lFMU"
                    />
                    <meta property="og:title" content="Epsilon Development Labs" />
                    <meta property="og:url" content="https://epsilondevlabs.com/" />
                    <meta property="og:image" content="./images/1.png" />
                    <meta
                        property="og:description"
                        content="Epsilon Development Labs is a full-service software development agency."
                    />
                    {/* Favicons */}
                    <link href="./images/favicon-epsilon.png" rel="icon" />
                    {/* Google Fonts */}
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                        rel="stylesheet"
                    />
                    {/* Vendor CSS Files */}
                    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                    <link
                        href="assets/vendor/bootstrap/css/bootstrap.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
                        rel="stylesheet"
                    />
                    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                    <link
                        href="assets/vendor/glightbox/css/glightbox.min.css"
                        rel="stylesheet"
                    />
                    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
                    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
                    {/* Template Main CSS File */}
                    <link href="assets/css/style.css" rel="stylesheet" />
                </p>



            </Head>
            {/* Hello world */}
            {/* <div className="awesome" style={{ border: "1px solid red" }}>
                <label htmlFor="name">Enter your name: </label>
                <input type="text" id="name" />
            </div> */}


            {/* -----------NAVBAR----------- */}
            <header id="header" className="">
                <div className="bg-blue-980 flex items-center p-2 fixed top-0 left-0 w-full z-50 bg-opacity-90">
                    <h1 className="logo ml-700 text-4xl ml-6">
                        <a className='text-gray-50 ml-12 inline-block' href="index.html" style={{ textDecoration: 'none' }}>
                            <span className="text-blue-700">ε</span>psilon
                        </a>
                    </h1>

                    <a href="index.html" className="logo me-auto"
                    ><img src="./images/main-logo.png" alt="" className="img-fluid"
                        /></a>
                    <nav id="navbar" className="navbar flex space-x-5 justify-end">
                        <ul className='text-gray-400 flex space-x-6 ml-auto mr-16 items-center'>
                            <li className='transition duration-100 hover:text-white'>
                                <a className=" nav-link scrollto active" href="#hero">
                                    Home
                                </a>
                            </li>
                            <li className='transition duration-100 hover:text-white'>
                                <a className="nav-link scrollto" href="#about">
                                    About Us
                                </a>
                            </li>
                            <li className='transition duration-100 hover:text-white'>
                                <a className="nav-link scrollto" href="#services">
                                    Services
                                </a>
                            </li>
                            <li className='transition duration-100 hover:text-white'>
                                <a className="nav-link scrollto" href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li className='transition duration-100 hover:text-white'>
                                <a className="nav-link scrollto" href="#pricing">
                                    Pricing
                                </a>
                            </li>
                            {/* <li><a class="nav-link scrollto" href="#team">Testimonials</a></li>
      
            <li class="dropdown">
              
              <a href="#"
                ><span>Drop Down</span> <i class="bi bi-chevron-down"></i
              ></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown">
                  <a href="#"
                    ><span>Deep Drop Down</span>
                    <i class="bi bi-chevron-right"></i
                  ></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            */}
                            <li className='transition duration-100 hover:text-white'>
                                <a className="nav-link scrollto " href="#contact">
                                    Contact Us
                                </a>
                            </li>
                            <li className='mr-0 rounded-full bg-blue-980 transition duration-300 hover:bg-blue-900'>
                                <a className="getstarted scrollto inline-block px-4 py-2 text-white shadow-md rounded-full  border-blue-700 no-underline" href="#contact">
                                    Get a Quote
                                </a>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* ---------navbar-------- */}
                </div>
            </header>
            {/* End Header */}

        </header>
    );
};
export default Header;


