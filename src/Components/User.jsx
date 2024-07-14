import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchUserDetails, fetchBlogsByUserId } from '../api/api';
import { FaSpinner } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-2xl transition-transform transform hover:scale-105 h-full flex flex-col">
    <div className="p-6 flex-1 flex flex-col justify-between gap-4">
      <h2 className="text-2xl font-bold text-[#1a237e] hover:underline mb-4 h-15">
        <Link to={`/blogs/${blog.id}`} className="block">{blog.title}</Link>
      </h2>
      <p className="text-gray-700 overflow-hidden mb-4 h-24">
        {blog.body}
      </p>
      <div className="flex items-center">
        <FaUserCircle className="text-[#ffd700] text-xl mr-2" />
        <p className="text-sm text-gray-600">
          by{' '}
          <Link to={`/users/${blog.userId}`} className="text-[#1a237e] hover:underline">
            Unknown User
          </Link>
        </p>
      </div>
    </div>
    <div className="bg-gradient-to-r from-[#1a237e] to-[#3949ab] text-[#ffd700] py-3 px-6 border-t border-[#ffd700]">
      <p className="text-sm text-right">
        Read more
      </p>
    </div>
  </div>
);

const User = () => {
  const { id } = useParams();

  const { data: user, error: userError, isLoading: userLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserDetails(id)
  });

  const { data: blogs, error: blogsError, isLoading: blogsLoading } = useQuery({
    queryKey: ['userBlogs', id],
    queryFn: () => fetchBlogsByUserId(id)
  });

  if (userLoading || blogsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  if (userError) return <div className="text-red-500 text-center mt-4">Error fetching user details</div>;
  if (blogsError) return <div className="text-red-500 text-center mt-4">Error fetching user blogs</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl p-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-[#1a237e] mb-2">{user.name}</h1>
          <p className="text-gray-700 mb-2">{user.email}</p>
          <p className="text-gray-700 mb-2">{user.phone}</p>
          <p className="text-gray-700 mb-2">{user.website}</p>
        </div>
        <h2 className="text-xl font-bold text-[#1a237e] mb-4">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
