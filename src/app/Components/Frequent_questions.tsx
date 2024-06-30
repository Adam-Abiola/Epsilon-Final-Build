import '../main.js';


//import Image from './images/';

//import Image from "next/image";
import styles from './styles/styles.module.scss';

import Head from 'next/head'
import Script from 'next/script';
import React from 'react';
import { Accordion } from "flowbite-react";

const images = {
    'cemex_all': require('../images/cemex_all.png').default,
    '1': require('../images/1.png').default,
    'client_cemex': require('../images/client_cemex.png').default,
    'cta-bg': require('../images/cta-bg.jpg').default,
    'favicon-epsilon': require('../images/favicon-epsilon.png').default

};

interface Frequent_questionsProps {
    toggleExpand: () => void;
    isExpanded: boolean;
}

const Frequent_questions: React.FC<Frequent_questionsProps> = ({ toggleExpand, isExpanded }) => {
    return (
        <>
            {/* ======= Frequently Asked Questions Section ======= */}
            <div id="services" className="services section-bg bg-gray-100">
                <div className="container mb-12" data-aos="fade-up">
                    <div className="section-title text-4xl font-bold text-center relative">
                        <h2 className="mb-4 inline-block mt-12">FREQUENTLY ASKED QUESTIONS</h2>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-2 border-gray-300 w-28"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-4 border-blue-980 w-12"></div>
                    </div>

                    <div className="row content text-center mt-12">
                        <figure className="text-center mb-0">
                            <blockquote className="blockquote mb-4">
                                <p>
                                    {" "}
                                    <span className="italic text-lg text-gray-600 ">
                                        <i className="fa fa-quote-left flex justify-center text-center" />
                                        Here, you will find answers to some of the most common questions we
                                        receive about our software development services. If you have a
                                        question that is not covered here, please feel free to contact us
                                        and we will be happy to help.
                                        <i className="fa fa-quote-right" />{" "}
                                    </span>
                                </p>

                            </blockquote>
                        </figure>
                    </div>

                    {/* --------------------------ACCORDION COMPONENT----------- */}
                    <div className='bg-white  max-h-xs max-w-1/2'>
                        <Accordion collapseAll >
                            <Accordion.Panel className='bg-white'>
                                <Accordion.Title>

                                    <p className='text-xl text-blue-800'>01    What makes Epsilon Development Labs different from other software development companies?
                                    </p>
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className=" text-gray-500 dark:text-gray-400">
                                        We are dedicated to staying up-to-date with the latest industry trends and advances in technology,
                                        ensuring that our solutions are always at the forefront of innovation. Our team is also highly skilled
                                        and experienced, with a proven track record of delivering high-quality products.
                                    </p>

                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>

                                    <p className='text-xl text-blue-800'>02     How do you work with clients to ensure their vision is at the
                                        heart of every project?
                                    </p>
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        We take a collaborative and transparent approach to working
                                        with our clients. We listen carefully to their needs and
                                        goals, and work closely with them throughout the development
                                        process to ensure that their vision is reflected in the final
                                        product.
                                    </p>

                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>

                                    <p className='text-xl text-blue-800'>03      What kind of services does Epsilon Development Labs offer?
                                    </p>
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        We offer a range of software development services, including
                                        custom software development, mobile app development, web
                                        development, and more. We also offer ongoing support and
                                        maintenance to ensure that our clients’ systems are always
                                        running smoothly.
                                    </p>


                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>

                                    <p className='text-xl text-blue-800 '>01     How is pricing determined for software development projects?
                                    </p>
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p>
                                        At Epsilon Development Labs, pricing for software development
                                        projects is based on the specific requirements, goals, and
                                        scope of each project. We work closely with our clients to
                                        understand their needs and develop a tailored plan that meets
                                        their budget and timeline. <br />
                                    </p>
                                    <p />
                                    Our pricing is competitive and provides excellent value for
                                    money. To get a quote for your software development project,
                                    please contact us and provide details about your project. Our
                                    team will be happy to provide a personalized quote and discuss
                                    your options.
                                    <p />


                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>








                    </div>

                </div>
            </div>
            {/* End Frequently Asked Questions Section */}

        </>

    );
};
export default Frequent_questions;