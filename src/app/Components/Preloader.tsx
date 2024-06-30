import React from 'react';

const Preloader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-blue-980">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-100"></div>
        </div>
    );
};

export default Preloader;