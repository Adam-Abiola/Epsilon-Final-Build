import '../main.js';


import Image from 'next/image';
import undraw_programming_re_kg9v from '../images/undraw_programming_re_kg9v.svg';
import Aos from 'aos';

import styles from './styles/styles.module.scss';

import Head from 'next/head'
import Script from 'next/script';
import React from 'react';
import '../globals.css';


const images = {
    'cemex_all': require('../images/cemex_all.png').default,
    '1': require('../images/1.png').default,
    'client_cemex': require('../images/client_cemex.png').default,
    'cta-bg': require('../images/cta-bg.jpg').default,
    'favicon-epsilon': require('../images/favicon-epsilon.png').default,
    'undraw_programming_re_kg9v.svg': require('../images/undraw_programming_re_kg9v.svg').default

};


const Hero: React.FC = () => {
    return (
        <div id="hero">
            {/* ======= Hero Section ======= */}
            <div id="hero" className="bg-blue-980 flex items-center">
                <div className="container">
                    <div className="flex flex-col lg:flex-row">
                        <div
                            className="p-20  flex flex-col justify-center pt-4 pt-lg-0 mt-12 "
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <h1 className='text-5xl text-white custom-mt mt-14'>Innovative solutions for your software needs</h1>
                            <h2 className='text-gray-300 text-2xl'>
                                Expert developers, exceptional quality, and personalized service
                            </h2>
                            <p> </p>
                            <div className="flex justify-center lg:justify-start mt-12">
                                <a href="#contact" className="getstarted scrollto inline-block px-4 py-2 bg-sky-900 text-white rounded-full shadow-md transition duration-200 hover:bg-blue-500 no-underline">
                                    Get a Quote Today!
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 flex justify-center lg:justify-end order-1 lg:order-2 hero-img mt-12 lg-mt-0"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >

                            {/* Hero image */}
                            <Image className=' w-85 h-100 custom-bounce' src={undraw_programming_re_kg9v} alt="My Image" />

                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero */}




        </div>


    );
};
export default Hero;