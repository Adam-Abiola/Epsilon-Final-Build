
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const SubmitForm = () => {
    return (
        //Page after form has been submitted
        <div className='bg-blue-200'>

            <div className="flex flex-col items-center justify-center h-screen">
                <div className="logo text-4xl flex flex-col items-center text-center mb-6">
                    <a className='text-gray-50' href="index.html" style={{ textDecoration: 'none' }}>
                        <span className="text-blue-700">ε</span>psilon
                    </a>
                    <h3 className='text-blue-900 mt-4'>Thank you for reaching out. We will contact you soon!!!</h3>
                </div>
                <FontAwesomeIcon icon={faThumbsUp} size="4x" className='text-blue-950' />
            </div>

        </div>
    );
}

export default SubmitForm;