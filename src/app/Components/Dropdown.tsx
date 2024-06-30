import React, { useState } from 'react';

const Dropdown: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        onClick={toggleDropdown}
      >
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;