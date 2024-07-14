import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#1a237e] text-[#ffd700] shadow-xl  flex items-center justify-between p-4">
      <h1 className="text-4xl max-md:text-xl text-center font-black">
        <Link to="/" className="hover:text-[#ffd700] transition-colors">𝓜𝓨 𝓑𝓛𝓞𝓖 𝓐𝓟𝓟</Link>
      </h1>
      <div className="hidden md:flex items-center gap-10">
        <Link to="/users" className="text-2xl font-bold hover:scale-y-300 hover:underline duration-1000 transition-transform">
          Users
        </Link>
        <Link to="/blogs" className="text-2xl font-bold hover:scale-y-300 hover:underline duration-1000 transition-transform">
          Blogs
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col z-10 items-center gap-4 absolute top-16 left-0 right-0 bg-[#1a237e] text-[#ffd700] p-4 shadow-lg">
          <Link to="/users" onClick={toggleMenu} className="text-2xl font-bold hover:scale-y-300 hover:underline duration-1000 transition-transform">
            Users
          </Link>
          <Link to="/blogs" onClick={toggleMenu} className="text-2xl font-bold hover:scale-y-300 hover:underline duration-1000 transition-transform">
            Blogs
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
