import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-[#1a237e] text-[#ffd700] shadow-xl mb-10 flex items-center gap-10 p-4">
      <h1 className="text-4xl max-md:text-xl text-center font-black">
        <Link to="/" className="hover:text-[#ffd700] transition-colors">𝓜𝓨 𝓑𝓛𝓞𝓖 𝓐𝓟𝓟</Link>
      </h1>
      <span className="text-2xl font-bold  hover:scale-y-300 hover:underline  duration-1000 transition-transform">Users</span>
      <span className="text-2xl font-bold">Blogs</span>
    </div>
  );
};

export default Navbar;
