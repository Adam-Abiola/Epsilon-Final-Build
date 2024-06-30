"use client";


// import './main.js';
import { AppProps } from 'next/app';


import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateForm from './create/CreateForm';
import SubmitForm from './create/SubmitForm';



//import Image from './images/';

//import Image from "next/image";
import styles from './styles/styles.module.scss';

import Head from 'next/head'
import Script from 'next/script';
import React, { useState, useEffect } from 'react';


import Why_us from './Components/Why_us';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Frequent_questions from './Components/Frequent_questions';
import Contact_us from './Components/Contact_us';
import Footer from './Components/Footer';


import About_us from './Components/About_us';
import RootLayout from './layout';
{/* Inner Page imports */ }



import { faPhone } from '@fortawesome/free-solid-svg-icons';





const images = {
  'cemex_all': require('./images/cemex_all.png').default,
  '1': require('./images/1.png').default,
  'client_cemex': require('./images/client_cemex.png').default,
  'cta-bg': require('./images/cta-bg.jpg').default,
  'favicon-epsilon': require('./images/favicon-epsilon.png').default

};


import { AccordionContent, AccordionPanel, AccordionTitle, Button } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Accordion } from "flowbite-react";
import Preloader from './Components/Preloader';

const myComponent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Only animate once
    });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or any async operation
    setTimeout(() => {
      setLoading(false); // Set loading to false after some delay (simulating data fetch completion)
    }, 3000); // Simulate 3 seconds of loading time
  }, []);


  return (
    <Router>



      {loading ? (
        <Preloader />
      ) : (
        <RootLayout>
          <Routes>
            <Route
              path="/"
              element={

                <div className='font-sans ' data-aos='fade-up'> {/* Changes the font and adds the fade-up data-os animation */}
                  {/* <Inner_header /> */}
                  <Header />



                  <Hero />








                  {/* ======= Clients Section ======= 
          */}
                  <div className='bg-gray-100 font-sans'>
                    <About_us />
                    <div id="team" className="team bg-gray-100">
                      <div className="container" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div className="col text-center mt-2">
                            <div className="member bg-white rounded-lg p-6 shadow-md" data-aos="zoom-in" data-aos-delay={100}>
                              <div className="icon text-blue-700">
                                <i className="fas fa-briefcase text-xl" />
                              </div>
                              <h2 className="mt-3 text-3xl font-bold">2020</h2>
                              <h4 className="text-gray-700">Launched</h4>
                            </div>
                          </div>
                          <div className="col text-center mt-2">
                            <div className="member bg-white rounded-lg p-6 shadow-md" data-aos="zoom-in" data-aos-delay={200}>
                              <div className="icon text-blue-700">
                                <i className="fas fa-users text-xl" />
                              </div>
                              <h2 className="mt-3 text-3xl font-bold">23</h2>
                              <h4 className="text-gray-700">Clients</h4>
                            </div>
                          </div>
                          <div className="col text-center mt-2">
                            <div className="member bg-white rounded-lg p-6 shadow-md" data-aos="zoom-in" data-aos-delay={300}>
                              <div className="icon text-blue-700">
                                <i className="fab fa-uncharted text-xl" />
                              </div>
                              <h2 className="mt-3 text-3xl font-bold">34</h2>
                              <h4 className="text-gray-700">Projects</h4>
                            </div>
                          </div>
                          <div className="col text-center mt-2">
                            <div className="member bg-white rounded-lg p-6 shadow-md" data-aos="zoom-in" data-aos-delay={400}>
                              <div className="icon text-blue-700">
                                <i className="fas fa-handshake text-xl" />
                              </div>
                              <h2 className="mt-3 text-3xl font-bold">35</h2>
                              <h4 className="text-gray-700">Partners</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Why_us />
                  </div>

                  {/* ======= Skills Section ======= */}
                  {/*  <section id="skills" class="skills">
            */}
                  <Services />



                  {/* ======= Cta Section ======= */}
                  {/**/}

                  <div className='bg-blue-100'>
                    <Portfolio />
                    {/* ======= Team Section ======= 
          
          
          */}
                    <Frequent_questions toggleExpand={function (): void {
                      throw new Error('Function not implemented.');
                    }} isExpanded={false} />
                  </div>
                  <p className='bg-gray-100'> </p>
                  <Contact_us />

                  <Routes>
                    <Route path="/" element={<CreateForm />} />
                    <Route path="/success" element={<SubmitForm />} />
                  </Routes>





                  <div id="services" className="services section-bg bg-blue-100">
                    <div className="container" data-aos="fade-up">
                      <div className="section-title text-4xl font-bold text-center relative">
                        <h2 className="mb-4 inline-block mt-12">CONTACT</h2>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-2 border-gray-300 w-28"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-4 border-blue-980 w-12"></div>
                      </div>

                      <div className="row content text-center mt-12">
                        <figure className="text-center mb-0">
                          <blockquote className="blockquote mb-4">
                            <p>
                              {" "}
                              <span className="italic text-lg text-gray-600">
                                <i className="fa fa-quote-left" />
                                Get in touch with our team
                                <i className="fa fa-quote-right" />{" "}
                              </span>
                            </p>



                          </blockquote>
                        </figure>
                      </div>



                      <div className="flex justify-center items-center space-x-24">
                        <div className="phone flex flex-col items-center mr-52">
                          <div className="mb-2 text-blue-980">
                            <a href="mailto:info@epsilonlabs.com">
                              <FontAwesomeIcon icon={faEnvelope} size="2x" className='text-blue-900' />
                            </a>
                          </div>
                          <a href="mailt0:info@epsilonlabs.com" className="text-blue-900 no-underline">
                            <p>info@epsilonlabs.com</p>
                          </a>
                        </div>


                        <div className="phone flex flex-col items-center -mr-28">
                          <div className="mb-2 text-blue-980">
                            <a href="tel:+239097650247">
                              <FontAwesomeIcon icon={faPhone} size="2x" className='text-blue-900' />
                            </a>
                          </div>
                          <a href="tel:+239097650247" className="text-blue-900 no-underline">
                            <p>+2349097650247</p>
                          </a>
                        </div>


                      </div>
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0 w-100 d-flex align-items-center"></div>
                  </div>

                  {/* End #main */}
                  <Footer />







                </div>
              }
            />
            <Route path="/success" element={<SubmitForm />} />
          </Routes>
        </RootLayout>









      )}


    </Router>
  );
}

export default myComponent;
