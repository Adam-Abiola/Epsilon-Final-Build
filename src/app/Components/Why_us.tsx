import '../main.js';


//import Image from './images/';

import Image from "next/image";
import styles from './styles/styles.module.scss';

import Head from 'next/head'
import Script from 'next/script';

import React from 'react';
import Dropdown from './Dropdown';

import undrawremotely_2_j6y from '../images/undrawremotely_2_j6y.svg';

import { Accordion } from "flowbite-react";

const images = {
    'cemex_all': require('../images/cemex_all.png').default,
    '1': require('../images/1.png').default,
    'client_cemex': require('../images/client_cemex.png').default,
    'cta-bg': require('../images/cta-bg.jpg').default,
    'favicon-epsilon': require('../images/favicon-epsilon.png').default,
    'UndrawRemotely.svg': require('../images/UndrawRemotely.svg').default

};


const Why_us: React.FC = () => {
    return (
        <>
            {/* ======= Why Us Section ======= */}
            <div id="why-us" className="mt-10 ">
                <div className="items-center justify-center flex ml-12" data-aos="fade-up ">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="md:col-span-1">
                            <div>
                                <h3 className="text-xl font-weight-200 md:text-2xl mb-4">
                                    Why Work With{' '}
                                    <strong className="text-blue-980 font-bold text-3xl">Epsilon Development Labs?</strong>
                                </h3>
                                <p className="text-gray-600">
                                    Epsilon Development Labs is a full-service development agency. With us, you'll get high-quality code, smart designs, and an experienced team that's ready to help you build your idea into reality.
                                </p>

                            </div>









                            {/* --------------------------ACCORDION cOMPONENT----------- */}
                            <div className='bg-white p-0'>
                                <Accordion collapseAll >
                                    <Accordion.Panel className='bg-white'>
                                        <Accordion.Title>

                                            <p className='text-xl text-blue-900'>01    Flexible and tailored approach to software development
                                            </p>
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <p className=" text-gray-500 dark:text-gray-400">
                                                Our approach to software development is flexible and
                                                tailored to the unique needs and goals of each project. We
                                                work closely with our clients to understand their
                                                requirements and develop a solution that meets their
                                                specific needs, budget, and timeline. We believe that this
                                                tailored approach leads to better outcomes for our clients
                                                and more successful projects.
                                            </p>

                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>

                                            <p className='text-xl text-blue-900'>01    Collaborative Approach to Development
                                            </p>
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                We believe in the power of collaboration and work closely
                                                with our clients to ensure a seamless and successful
                                                development process. We value open communication and
                                                transparent decision-making to build trust and deliver the
                                                best results.
                                            </p>

                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>

                                            <p className='text-xl text-blue-900'>01     Comprehensive Range of Services
                                            </p>
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                Our software development services cover the full
                                                development life cycle, from initial concept and design to
                                                development, testing, and deployment. We can also provide
                                                ongoing support and maintenance to ensure that your
                                                software continues to perform at its best.
                                            </p>


                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>

                                            <p className='text-xl text-blue-900 '>01     Client-First Policy
                                            </p>
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                                Our clients are at the heart of everything we do, and we
                                                are proud to have a long list of satisfied clients who
                                                have benefited from our software development services. We
                                                strive to build long-term relationships with our clients
                                                based on trust and mutual success.
                                            </p>


                                        </Accordion.Content>
                                    </Accordion.Panel>
                                </Accordion>
                            </div>
                            {/* --------------------------ACCORDION cOMPONENT----------- */}
                        </div>
                        <div
                            className="w-96 h-96 m-auto" // Increase width and height as needed
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <Image
                                className='w-full h-full p-0 animate-custom-bounce' // Use w-full and h-full to ensure image fills the div
                                src={undrawremotely_2_j6y}
                                alt="My Image"
                            />
                            &nbsp;
                        </div>
                    </div>
                </div>
            </div>
            <section className="h-screen ">
                <>
                    {/* Hello world
                    {/* <div className="awesome" style={{ border: "1px solid red" }}>
                        <label htmlFor="name">Enter your name: </label>
                        <input type="text" id="name" />
                    </div> */}
                    {/* <p>{"{"}/*</p> */}
                    {/* <div className="container py-2 h-full">
                        <div className="flex flex-row items-center">

                            <div className="w-full lg:w-1/2 px-4">
                                <h2 className="text-2xl lg:text-3xl font-bold mb-2">Mission</h2>
                                <p className="text-base lg:text-lg">
                                    Our goal at Epsilon Development Labs is to consistently exceed the
                                    expectations of our clients by delivering valuable software
                                    development services.
                                </p>
                            </div>

                            <div className="w-full lg:w-1/2 px-4">
                                <h2 className="text-2xl lg:text-3xl font-bold mb-2">Vision</h2>
                                <p className="text-base lg:text-lg">
                                    We strive to be a top-choice software development partner for
                                    businesses, offering reliable solutions that help them achieve their
                                    goals.
                                </p>
                            </div>

                        </div>
                        <div className="flex items-center justify-center h-1/4">
                            <div className="col col-lg-10 col-xl-8">
                                <div
                                    style={{
                                        border: "3px solid #034078",
                                        backgroundColor: "rgb(255, 255, 255)"
                                    }}
                                    className="card rounded-3"
                                >
                                    <div className="card-body p-5">
                                        <div className="d-flex justify-content-center mb-4 col w-25 mx-auto ">
                                            <img
                                                src="./images/DSC_8702e.png"
                                                className="shadow-1-strong rounded-circle"
                                                width={190}
                                            />
                                        </div>
                                        <figure className="text-center mb-0">
                                            <blockquote className="blockquote mb-4">
                                                <p>
                                                    <span className="font-italic">
                                                        <i className="fa  fa-quote-left" /> At Epsilon Development
                                                        Labs, we strive to create exceptional software solutions for
                                                        our clients through the use of advanced technology and
                                                        innovative thinking. We are dedicated to continually pushing
                                                        the limits of what is possible and providing our customers
                                                        with nothing but the best{" "}
                                                        <i className="fa fa-quote-right" />{" "}
                                                    </span>
                                                </p>
                                            </blockquote>
                                            <div className="row">
                                                <figcaption className="blockquote-footer mb-0 col">
                                                    <h3> Udochukwu Okoro </h3>{" "}
                                                    <cite title="Source Title">
                                                        Founder and Managing Director
                                                    </cite>
                                                </figcaption>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    
                    <p /> */}
                </>
                {/* --------------------------TESTIMONIALS----------- */}
                <div className="container bg-green-50" data-aos="fade-up">
                    <div className="section-title text-4xl font-bold text-center relative">
                        <h2 className="mb-4 inline-block mt-12">TESTIMONIALS</h2>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-2 border-gray-300 w-28"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-4 border-blue-980 w-12"></div>
                    </div>

                    <div className="row content text-center mt-12">
                        <figure className="text-center mb-0">
                            <blockquote className="blockquote mb-4">
                                <p>
                                    {" "}
                                    <span className="italic text-xl text-gray-600">
                                        <i className="fa fa-quote-left" />
                                        Epsilon did an excellent job in setting up our website. Their
                                        attention to detail, responsiveness, creativity, and diligence
                                        are world class.
                                        <i className="fa fa-quote-right" />{" "}
                                    </span>
                                </p>
                            </blockquote>
                        </figure>
                    </div>
                    <figcaption className="blockquote-footer mb-0 col text-center mt-5">
                        <h4 className="text-xl font-bold text-gray-500">Dr. Malcolm Fabiyi, CEO of JETS.NG</h4>
                    </figcaption>


                </div>
            </section>

        </>
    );
};

export default Why_us;



