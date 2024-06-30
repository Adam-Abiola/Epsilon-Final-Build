

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateForm from './CreateForm';
import SubmitForm from './SubmitForm'; // Creating a SubmitForm Page component

const CreateTicket = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<CreateForm />} />
                    <Route path="/success" element={<SubmitForm />} />
                </Routes>
            </Router>
        </div>
    );
}


export default CreateTicket;