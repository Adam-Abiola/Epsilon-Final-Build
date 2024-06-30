import '../main.js';


//import Image from './images/';

//import Image from "next/image";
import styles from './styles/styles.module.scss';

import Head from 'next/head'
import Script from 'next/script';
import React, { useState } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import CreateForm from '../create/page';



const images = {
    'cemex_all': require('../images/cemex_all.png').default,
    '1': require('../images/1.png').default,
    'client_cemex': require('../images/client_cemex.png').default,
    'cta-bg': require('../images/cta-bg.jpg').default,
    'favicon-epsilon': require('../images/favicon-epsilon.png').default

};


const Contact_us: React.FC = () => {
    return (
        <>
            {/* ======= Contact Section ======= */}
            <div id="contact" className="services section-bg mt-12">
                <div className="container" data-aos="fade-up ">
                    <div className="section-title text-4xl font-bold text-center relative">
                        <h2 className="mb-4 inline-block mt-12">GET A QUOTE</h2>
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
                                        Ready to start your software project? Contact us for a quote today
                                        <i className="fa fa-quote-right" />{" "}
                                    </span>
                                </p>



                            </blockquote>
                        </figure>
                    </div>







                    {/* <ContactForm /> */}
                    {/* <CreateForm /> */}



                </div>
            </div>
            {/* End Contact Section */}

        </>

    );


};
export default Contact_us;