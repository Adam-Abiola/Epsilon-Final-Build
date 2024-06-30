// 
"use client";












import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        business_name: '',
        email: '',
        phone: '',
        software_solution: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Handle success (e.g., show success message, reset form)
                console.log('Email sent successfully');
            } else {
                // Handle error
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-4/5 lg:w-4/5 xl:w-4/5 mt-5">
                <div className="bg-white border-t-4 border-blue-980 p-2 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="php-email-form">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="form-group">
                                <label htmlFor="name" className="text-gray-600">
                                    Your Name
                                </label>
                                <div className="border border-gray-300 p-2 rounded-md relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control w-full"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="business_name" className="text-gray-600">
                                    Your Business Name
                                </label>
                                <div className="border border-gray-300 p-2 rounded-md relative">
                                    <input
                                        type="text"
                                        name="business_name"
                                        className="form-control w-full"
                                        id="business_name"
                                        value={formData.business_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="text-gray-600">
                                    Your Email
                                </label>
                                <div className="border border-gray-300 p-2 rounded-md relative">
                                    <input
                                        type="email"
                                        className="form-control w-full"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="text-gray-600">
                                    Your Phone Number
                                </label>
                                <div className="border border-gray-300 p-2 rounded-md relative">
                                    <input
                                        type="text"
                                        className="form-control w-full"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-6">
                            <label htmlFor="software_solution" className="text-gray-600 mt-6">
                                Describe the Software Solution you Need
                            </label>
                            <div className="border border-gray-300 p-4 rounded-md relative h-48">
                                <textarea
                                    className="form-control absolute inset-0 w-full h-full p-4 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    name="software_solution"
                                    id="software_solution"
                                    value={formData.software_solution}
                                    onChange={handleChange}
                                    required
                                    style={{ resize: 'none' }}
                                />
                            </div>
                        </div>
                        <div data-netlify-recaptcha="true" />
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">
                                Your message has been sent and our team will reach out to you! <br /> Thank you!
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <input
                                className="btn btn-primary mx-auto"
                                style={{
                                    background: "#034078",
                                    border: 0,
                                    padding: "12px 34px",
                                    color: "#fff",
                                    transition: "0.4s",
                                    borderRadius: 50,
                                    fontSize: 15
                                }}
                                type="submit"
                                value="Send Message"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
