import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Components/Navbar.jsx'; 
import Footer from '../src/Components/Footer.jsx'; 
import Hero from './Components/Hero.jsx';

const Blogs = lazy(() => import('../src/Components/Blogs.jsx'));
const Blog = lazy(() => import('../src/Components/Blog.jsx'));
const Users = lazy(() => import('../src/Components/Users.jsx'));
const User = lazy(() => import('../src/Components/User.jsx'));

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            <Route path="/" element={<Hero/>} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<Blog />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<User />} />
            </Routes>
          </Suspense>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
