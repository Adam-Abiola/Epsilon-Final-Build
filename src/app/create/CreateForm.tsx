"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SubmitForm from './SubmitForm';
import { useNavigate } from 'react-router-dom';

const CreateForm: React.FC = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // Assuming password is needed
    const [phone, setPhone] = useState("");
    const [businessname, setBusinessname] = useState("");
    const [message, setMessage] = useState("");
    const [formError, setFormError] = useState("");

    const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            name: name, //name of person using the form
            email: email,// email of person using the form
            businessname: businessname, //business name of person using the form
            phone: phone, //phone number of person using the phone
            message: message // the message sent in the form
        };

        emailjs
            .send('contact_service', 'contact_form', data, 'sU4lzKoEBOTXN0ryJ')
            .then(
                () => {
                    // Redirect to success page upon successful submission
                    navigate('/success');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setFormError("Failed to send email. Please try again later."); // Handle error message display
                }
            );

        // Optional: Clear form fields after submission
        setEmail("");
        setName("");
        setPhone("");
        setBusinessname("");
        setMessage("");
    };






    return (
        //------------------FORM STRUCTURE-------------------
        <div className="flex justify-center">
            <div className="w-full md:w-4/5 lg:w-4/5 xl:w-4/5 mt-5">
                <div className="bg-white border-t-4 border-blue-980 p-2 rounded-lg shadow-lg">
                    <form
                        action="submission.html"
                        method="post"
                        onSubmit={handleSendEmail}
                        // ref={form}
                        // netlify=""
                        className="php-email-form form-style"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="">
                                <label htmlFor="name" className="text-gray-600">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    className="  border-gray-400 rounded-md w-full h-14 "
                                    onChange={(e) => setName(e.target.value)}


                                />


                            </div>
                            <div className="">
                                <label htmlFor="name" className="text-gray-600">
                                    Business Name
                                </label>

                                <input
                                    type="text"
                                    name="Businessname"
                                    className="  border-gray-400 rounded-md w-full h-14 "
                                    onChange={(e) => setBusinessname(e.target.value)}


                                />


                            </div>
                            <div className="">
                                <label htmlFor="name" className="text-gray-600">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="  border-gray-400 rounded-md w-full h-14 "
                                    onChange={(e) => setEmail(e.target.value)}


                                />


                            </div>
                            <div className="">
                                <label htmlFor="name" className="text-gray-600">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    className="  border-gray-400 rounded-md w-full h-14 "
                                    onChange={(e) => setPhone(e.target.value)}


                                />


                            </div>
                        </div>

                        <div className="form-group mt-6">
                            {/* <label htmlFor="software_solution" className="text-gray-600 mt-6">
                                Describe the Software Solution you Need
                            </label> */}
                            <label className="text-gray-600 mt-6">Message</label>


                            <div className="border border-gray-300 p-4 rounded-md relative h-48">

                                <textarea
                                    className=" absolute inset-0 w-full h-full p-4 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    name="message"
                                    // id="message"
                                    placeholder=""
                                    style={{ resize: "none" }}
                                    onChange={(e) => setMessage(e.target.value)}

                                />

                            </div>
                        </div>
                        <div data-netlify-recaptcha="true" />

                        <div className='justify-center text-center'>
                            <button className="text-center mt-2 btn btn-primary mx-auto btn-submit"

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
                                value="send"
                            // defaultValue="Send Message"
                            >Send Message</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )


}


// const CreateForm = () => {
//     return (
//         <div></div>
//     );
// }

export default CreateForm;