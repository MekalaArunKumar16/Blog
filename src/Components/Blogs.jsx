import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogs, fetchUsers } from '../api/api';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

const BlogCard = ({ blog, userName }) => (
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
          {userName ? (
            <Link to={`/users/${blog.userId}`} className="text-[#1a237e] hover:underline">
              {userName}
            </Link>
          ) : (
            <span className="text-gray-500">Unknown User</span>
          )}
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

export default function Blogs() {
  const { data: blogs, error: blogsError, isLoading: blogsLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  const { data: users, error: usersError, isLoading: usersLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (blogsLoading || usersLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  if (blogsError) return <div className="text-red-500 text-center mt-4">Error fetching blogs</div>;
  if (usersError) return <div className="text-red-500 text-center mt-4">Error fetching users</div>;

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => {
        const user = users.find((user) => user.id === blog.userId);
        const userName = user ? user.name : 'Unknown User';
        return <BlogCard key={blog.id} blog={blog} userName={userName} />;
      })}
    </div>
  );
}
