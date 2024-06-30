import '../main.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faObjectUngroup } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { all } from '@awesome.me/kit-KIT_CODE/icons';

// library.add(...all)

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


const Services: React.FC = () => {
    return (
        <>
            {/* ======= Services Section ======= */}
            <div id="services" className="services section-bg bg-gray-100" data-aos='fade-up'>
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-4xl font-bold text-center relative">
                        <h2 className="mb-4 inline-block mt-12">SERVICES</h2>
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
                                        We work with our clients to understand their needs and goals, create a tailored plan, and use the latest technologies to develop high-quality software solutions.
                                        <i className="fa fa-quote-right" />{" "}
                                    </span>
                                </p>

                                <p>
                                    {" "}
                                    <span className="italic text-lg text-gray-600">
                                        <i className="fa fa-quote-left" />
                                        solutions.
                                        <i className="fa fa-quote-right" />{" "}
                                    </span>
                                </p>

                            </blockquote>
                        </figure>
                    </div>




                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                        <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay={100}>
                            <div className='p-2'>
                                <div className='flex justify-start  left-5 -mt-2'>
                                    <div className=" ">
                                        <FontAwesomeIcon icon={faEarthAmericas} size="2xl" className='text-blue-900' />
                                    </div>
                                </div>
                                <h4 className="mt-4 text-lg font-semibold text-blue-980">
                                    <a className="text-blue-980 no-underline hover:text-blue-900" href="">Web Development</a>
                                </h4>
                                <p className="mt-2 text-md">
                                    Our web development and design services help our clients create attractive and user-friendly websites that deliver a seamless experience for their visitors.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay={200}>
                            <div className=''>
                                <div className='flex justify-start  left-7 '>
                                    <div className="  ">
                                        <FontAwesomeIcon icon={faMobile} size="2xl" className='text-blue-900' />
                                    </div>
                                </div>
                                <h4 className="mt-4 text-lg font-semibold text-blue-980">
                                    <a className="text-blue-980 no-underline hover:text-blue-900" href="">Mobile Development</a>
                                </h4>
                                <p className="mt-2 text-md">
                                    Our mobile app development services help our clients create high-quality, feature-rich mobile apps that provide value to their users.
                                </p>

                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay={300}>
                            <div className='p-2'>
                                <div className='flex justify-start  left-7 -mt-2'>
                                    <div className=" text-blue-900 ">
                                        <FontAwesomeIcon icon={faChartLine} size="2xl" className=" " />
                                    </div>
                                </div>
                                <h4 className="mt-4 text-lg font-semibold text-blue-980">
                                    <a className="text-blue-980 no-underline hover:text-blue-900" href="">Data Insights Gathering and Analytics</a>
                                </h4>
                                <p className="mt-2 text-md">
                                    Our data insights and analytics services help our clients make data-driven decisions by providing valuable insights and trends from their data.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay={400}>
                            <div className='p-2'>
                                <div className='flex justify-start -mt-2 left-0'>
                                    <div className="  ">
                                        <FontAwesomeIcon icon={faObjectUngroup} size="2xl" className='text-blue-900' />
                                    </div>
                                </div>

                                <div className='justify-start  left-7 '>

                                </div>
                                <h4 className="mt-4 text-lg font-semibold text-blue-980">
                                    <a className="text-blue-980 no-underline hover:text-blue-900" href="">IT Infrastructure Design and Implementation</a>
                                </h4>
                                <p className="mt-2 text-md">
                                    Our IT infrastructure design and implementation services help our clients design and implement efficient and effective IT systems that support their business operations.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay={100}>

                            <div className='p-2'>
                                <div className='justify-start  left-7 '>
                                    <div className='text-blue-900'>
                                        <FontAwesomeIcon icon={faPenToSquare} size="2xl" className=" " />
                                    </div>
                                </div>

                                <h4 className="mt-4 text-lg font-semibold text-blue-980">
                                    <a className="text-blue-980 no-underline hover:text-blue-900" href="">User Interface and User Experience Design</a>
                                </h4>
                                <p className="mt-2 text-md">
                                    Our UI/UX design services focus on creating intuitive and engaging user experiences for web and mobile applications.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay={200}>
                            <div className='p-2'>


                                <FontAwesomeIcon icon={faPenNib} size="2xl" className='text-blue-900' />



                                <h4 className="mt-4 text-lg font-semibold ">
                                    <a className="text-blue-980 no-underline hover:text-blue-900" href="">Brand and Graphic Design</a>
                                </h4>
                                <p className="mt-2 text-md">
                                    Our graphic design services help our clients create visually appealing and effective marketing materials, such as logos, brochures, and social media graphics.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay={300}>
                            <div className='p-2'>
                                <div className='justify-start flex  left-0 -mt-2'>
                                    <div className=" ">
                                        <FontAwesomeIcon icon={faPenRuler} size="2xl" className='text-blue-900' />
                                    </div>
                                </div>
                                <h4 className="mt-4 text-lg font-semibold text-blue-980">
                                    <a className="text-blue-980 no-underline hover:text-blue-900" href="">Custom Software Development</a>
                                </h4>
                                <p className="mt-2 text-md">
                                    Our custom software development services help our clients create bespoke software solutions that are tailored to their unique needs and goals.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay={400}>
                            <div className='p-2'>
                                <div className='flex justify-start  left-0 -mt-2'>
                                    <div className="  ">
                                        <FontAwesomeIcon icon={faHelmetSafety} size="2xl" className='text-blue-900' />
                                    </div>
                                </div>
                                {/* <h4 className="mt-4 text-lg font-semibold text-blue-980">
                                <a href="">IT Consulting</a>
                            </h4> */}
                                <h4 className="mt-4 text-lg font-semibold text-blue-980">
                                    <a className="text-blue-980 no-underline hover:text-blue-900" href="">IT Consulting</a></h4>
                                <p className="mt-2 text-md">
                                    Our IT consulting services provide expert guidance and support to help our clients make informed decisions about their technology needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Services Section */}

        </>


    );
}
export default Services;
