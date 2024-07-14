import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="relative h-full"
      >
        <div className="relative h-full">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJsb2d8ZW58MHx8fHwxNjA3NzQ2OTQ0&ixlib=rb-1.2.1&q=80&w=1080" alt="Blog Image 1" className="h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative h-full">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJsb2d8ZW58MHx8fHwxNjA3NzQ3MDc0&ixlib=rb-1.2.1&q=80&w=1080" alt="Blog Image 2" className="h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative h-full">
          <img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2MDc3NDcwODQ&ixlib=rb-1.2.1&q=80&w=1080" alt="Blog Image 3" className="h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      </Carousel>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#ffd700] p-4">
        <h1 className="text-6xl font-black mb-4 sm:text-4xl">Welcome to My Blog App</h1>
        <p className="text-2xl mb-6 sm:text-xl">
          Discover amazing content and share your thoughts with the world.
        </p>
        <Link to="/blogs" className="bg-[#ffd700] text-[#1a237e] hover:bg-[#ffc107] hover:text-[#0d1833] py-2 px-6 rounded-full text-xl font-bold transition-colors duration-300">
          Explore Blogs
        </Link>
      </div>
    </div>
  );
};

export default Hero;
