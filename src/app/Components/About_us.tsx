import '../main.js';


//import Image from './images/';

//import Image from "next/image";
import styles from './styles/styles.module.scss';

import Head from 'next/head'
import Script from 'next/script';
import React from 'react';


const images = {
    'cemex_all': require('../images/cemex_all.png').default,
    '1': require('../images/1.png').default,
    'client_cemex': require('../images/client_cemex.png').default,
    'cta-bg': require('../images/cta-bg.jpg').default,
    'favicon-epsilon': require('../images/favicon-epsilon.png').default

};


const About_us: React.FC = () => {
    return (
        <>
            {/* ======= About Us Section ======= */}
            <section id="about" className="about">
                <div className="container mt-12" data-aos="fade-up">
                    <div className="section-title text-4xl font-bold text-center relative">
                        <h2 className="mb-4 inline-block">About Us</h2>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-2 border-gray-200 w-24"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-4 border-blue-980 w-12"></div>
                    </div>
                    <div className="flex flex-wrap justify-center mx-9 mt-9 text-gray-600 ">
                        <div className="w-full lg:w-1/2 mr-0">
                            <p className='mb-4'>
                                At Epsilon Development Labs, we believe in using cutting-edge
                                technology and innovative thinking to create exceptional software
                                solutions for our clients.
                            </p>
                            <ul>
                                <li className='mb-3'>
                                    <i className="ri-check-double-line" /> committed to delivering
                                    exceptional quality and customer service.
                                </li>
                                <li className='mb-3'>
                                    <i className="ri-check-double-line" /> experienced and highly
                                    skilled, with a proven track record of success.
                                </li>
                                <li className=''>
                                    <i className="ri-check-double-line" /> collaborative and
                                    transparent approach to working with our clients.
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-end">
                            <div className="pt-4 lg:pt-0">
                                <p className='mb-4'>
                                    Our team is dedicated to staying up-to-date with the latest
                                    industry trends and advances in technology, ensuring that our
                                    solutions are always at the forefront of innovation. We take a
                                    collaborative and transparent approach to working with our
                                    clients, ensuring that their vision and needs are at the heart of
                                    every project.
                                </p>
                                <p className='mb-4'>
                                    With a focus on delivering value and exceeding expectations,
                                    Epsilon Development Labs is your trusted partner for all your
                                    software development needs.
                                </p>
                                <div className="border border-blue-980  rounded overflow-hidden transition-colors duration-300 text-blue-800 hover:bg-blue-980 hover:text-white  w-36 h-10">
                                    <a href="#contact" className="block px-2 py-1  text-center">
                                        Work With Us!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            {/* End About Us Section */}


        </>

    );

}

export default About_us;