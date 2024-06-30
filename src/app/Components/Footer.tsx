import '../main.js';


//import Image from './images/';

//import Image from "next/image";
import styles from './styles/styles.module.scss';

import Head from 'next/head'
import Script from 'next/script';
import React from 'react';
import ReactDOM from 'react-dom'
import main_logo from '../images/main_logo.png';
// import { library, IconProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareXTwitter, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

// import { all } from '@awesome/kit-KIT_CODE/icons'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons';
// import { all } from '@awesome.me/kit-KIT_CODE/icons'


const images = {
    'cemex_all': require('../images/cemex_all.png').default,
    '1': require('../images/1.png').default,
    'client_cemex': require('../images/client_cemex.png').default,
    'cta-bg': require('../images/cta-bg.jpg').default,
    'favicon-epsilon': require('../images/favicon-epsilon.png').default

};


const Footer: React.FC = () => {
    return (
        <>
            {/* ======= Footer ======= */}
            <footer id="footer" className="bg-white text-gray-600 py-8 -mb-7">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="col-span-2 md:col-span-1 lg:col-span-2 flex  justify-center flex-col text-left">

                            {/* <img src={main_logo.src} alt="Description of the image" className='w-3/6 h-auto p-4' /> */}

                            <p>NG: RC7061215</p>
                            <p>UK: CN15424279</p>


                            <p className="mt-4 text-left">
                                <strong>Phone:</strong>{" "}
                                <a href="tel:+239097650247" className="text-blue-800 no-underline"> +234 909 765 0247 </a> <br />
                                <strong>Email:</strong>{" "}
                                <a href="mailto:info@epsilondevlabs.com" className="text-blue-800 no-underline">
                                    info@epsilondevlabs.com
                                </a>{" "}
                                <br />
                            </p>
                        </div>

                        <div className="col-span-2 md:col-span-1 lg:col-span-2 max-w-64 ">
                            <h4 className="text-black font-bold text-base ">Our Social Networks</h4>
                            <p className="text-gray-800 fo justify-center text-left">You can reach us at any of our social media platforms</p>
                            <div className="flex mt-3">
                                <a href="https://twitter.com/EpsilonDevs" target="_blank" rel="noopener noreferrer" className=" mr-4">
                                    <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" className="text-blue-900" />
                                </a>
                                <a href="https://www.instagram.com/epsilondevs/" target="_blank" rel="noopener noreferrer" className=" mr-4">
                                    <FontAwesomeIcon icon={faSquareInstagram} size="2xl" className='text-blue-900' />
                                </a>
                                <a href="https://www.linkedin.com/company/epsilon-development-labs" target="_blank" rel="noopener noreferrer" className="">
                                    <FontAwesomeIcon icon={faLinkedin} size="2xl" className='text-blue-900' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-980 py-4">
                    <div className="container mx-auto">
                        <div className="text-center text-white">
                            <p className="text-sm">© Copyright 2023. All Rights Reserved</p>
                            <p className="text-sm font-bold">εpsilon</p>
                        </div>
                    </div>
                </div>
            </footer>





        </>

    );
};
export default Footer;
