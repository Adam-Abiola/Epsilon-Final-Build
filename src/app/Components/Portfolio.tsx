import '../main.js';


//import Image from './images/';

//import Image from "next/image";
import styles from './styles/styles.module.scss';

import Head from 'next/head'
import Script from 'next/script';
import React from 'react';
import client_cemex from '../images/client_cemex.png';
import cemex_all from '../images/cemex_all.png';
import jets_all from '../images/jets_all.png';
import client_jetss from '../images/client_jetss.png';
import client_missouri from '../images/client_missouri.png';
import missouri_site_removebg_preview from '../images/missouri_site_removebg_preview.png';


const images = {
    'cemex_all': require('../images/cemex_all.png').default,
    '1': require('../images/1.png').default,
    'client_cemex': require('../images/client_cemex.png').default,
    'cta-bg': require('../images/cta-bg.jpg').default,
    'favicon-epsilon': require('../images/favicon-epsilon.png').default

};


const Portfolio: React.FC = () => {
    return (
        <>
            {/* ======= Portfolio Section ======= */}
            <div id="portfolio" className="services section-bg bg-blue-50">
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-4xl font-bold text-center relative">
                        <h2 className="mb-4 inline-block mt-12">PORTFOLIO</h2>
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
                                        Take a look at some of our past projects.
                                        <i className="fa fa-quote-right" />{" "}
                                    </span>
                                </p>



                            </blockquote>
                        </figure>
                    </div>
                    {/* --------------------------PAST PROJECTS----------- */}
                    <div className=''>

                        <div className=" row border rounded-lg overflow-hidden mb-4 shadow-sm flex ml-12 justify-center col bg-white">
                            <div className=" justify-end flex ">
                                <div className="col p-4 flex items-center justify-center flex-col w-1/2 ml-12 mr-12 ">
                                    <img src={client_cemex.src} alt="Description of the image" className='w-24' />

                                    <h3 className="mb-2 text-uppercase text-3xl font-bold">CEMEX CONCRETE</h3>
                                    <form action="https://cemexconcrete.ng" target="_blank">
                                        <button className="mb-2 btn btn-primary flex justify-center lg:justify getstarted scrollto px-4 py-2 bg-sky-900 text-white rounded-full shadow-md border border-sky-900" type="submit">
                                            Visit Site
                                        </button>
                                    </form>
                                    <div className=''>
                                        <div className='flex justify-center '>
                                            <p className="mb-4 px-5 text-center">
                                                Cemex Concrete Nigeria is one of the largest producers of
                                                ready-mix-concrete in Nigeria, with customers across Major
                                                Nigerian Cities.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-uppercase font-bold" style={{ color: "#091127" }}>
                                        WEBSITE AND INFRASTRUCTURE
                                    </div>
                                </div>

                                <img src={cemex_all.src} alt="Description of the image" className='w-3/6 h-auto items-center p-4 mt-12 mb-12' />

                            </div>

                        </div>
                    </div>


                    <div className=''>

                        <div className=" row border rounded-lg overflow-hidden mb-4 shadow-sm flex ml-12 justify-center col bg-white">
                            <div className=" justify-end flex ">

                                <img src={jets_all.src} alt="Description of the image" className='w-3/6 h-auto items-center p-4 mt-12 mb-12' />

                                <div className="col p-4 flex items-center justify-center flex-col w-1/2 ml-12 mr-12 ">
                                    <img src={client_jetss.src} alt="Description of the image" className='w-24' />

                                    <h3 className="mb-2 text-3xl uppercase flex justify center text-center font-bold">Jobs and Economic Transformation Solutions - JETS</h3>
                                    <form action="https://cemexconcrete.ng" target="_blank">
                                        <button className="mb-2 btn btn-primary flex justify-center lg:justify getstarted scrollto px-4 py-2 bg-sky-900 text-white rounded-full shadow-md border border-sky-900" type="submit">
                                            Visit Site
                                        </button>
                                    </form>
                                    <div className=''>
                                        <div className='flex justify-center '>
                                            <p className="mb-4 px-5 text-center">
                                                JETS is a social enterprise organization that helps
                                                corporations, organizations, and communities create sustainable
                                                jobs. These jobs are designed to generate profits, benefit
                                                people, and also have a positive impact on the environment.
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" uppercase font-bold" style={{ color: "#091127" }}>
                                        Website and Infrastructure
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                    <div className=''>

                        <div className=" row border rounded-lg overflow-hidden mb-4 shadow-sm flex ml-12 justify-center col bg-white">
                            <div className=" justify-end flex ">
                                <div className="col p-4 flex items-center justify-center flex-col w-1/2 ml-12 mr-12 ">
                                    <img src={client_missouri.src} alt="Description of the image" className='w-48' />

                                    <h3 className="mb-2 text-uppercase text-3xl font-bold">MISSOURI ENGINEERING</h3>
                                    <form action="https://cemexconcrete.ng" target="_blank">
                                        <button className="mb-2 btn btn-primary flex justify-center lg:justify getstarted scrollto px-4 py-2 bg-sky-900 text-white rounded-full shadow-md border border-sky-900" type="submit">
                                            Visit Site
                                        </button>
                                    </form>
                                    <div className=''>
                                        <div className='flex justify-center '>
                                            <p className="mb-4 px-5 text-center">
                                                Missouri Engineering Limited is a full-service commercial & residential
                                                real estate company that has invested in the commercial & residential real
                                                estate market of Nigeria.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-uppercase font-bold" style={{ color: "#091127" }}>
                                        Brand and UI Design
                                    </div>
                                </div>

                                <img src={missouri_site_removebg_preview.src} alt="Description of the image" className='w-3/6 h-auto items-center p-4 mt-12 mb-12' />

                            </div>

                        </div>
                    </div>


                </div>
            </div>
            {/* End Portfolio Section */}
        </>

    );
};
export default Portfolio;