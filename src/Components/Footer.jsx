import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a237e] text-[#ffd700] shadow-xl py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">© 2024 My Blog App. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="/about" className="hover:text-[#ffd700] transition-colors">About</a>
          <a href="/contact" className="hover:text-[#ffd700] transition-colors">Contact</a>
          <a href="/privacy" className="hover:text-[#ffd700] transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
