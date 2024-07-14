import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchUserDetails, fetchBlogsByUserId, fetchCommentsByUserId } from '../api/api';
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
    </div>
    <Link to={`/blogs/${blog.id}`} className="block bg-gradient-to-r from-[#1a237e] to-[#3949ab] text-[#ffd700] py-3 px-6 border-t border-[#ffd700] text-sm text-right hover:bg-[#3949ab]">
      Read more
    </Link>
  </div>
);

const CommentCard = ({ comment }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-2xl transition-transform transform hover:scale-105 h-full flex flex-col mb-4">
    <div className="p-6">
      <p className="text-gray-700 mb-4">
        {comment.body}
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

  const { data: comments, error: commentsError, isLoading: commentsLoading } = useQuery({
    queryKey: ['userComments', id],
    queryFn: () => fetchCommentsByUserId(id)
  });

  if (userLoading || blogsLoading || commentsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  if (userError) return <div className="text-red-500 text-center mt-4">Error fetching user details</div>;
  if (blogsError) return <div className="text-red-500 text-center mt-4">Error fetching user blogs</div>;
  if (commentsError) return <div className="text-red-500 text-center mt-4">Error fetching user comments</div>;

  return (
    <div className="bg-gray-100">
      <div className="bg-[#1a237e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{user.name}</h1>
          <p className="text-2xl mb-2">{user.email}</p>
          <p className="text-xl mb-2">{user.phone}</p>
          <p className="text-xl mb-4">{user.website}</p>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl p-6 mt-[-100px] relative z-10">
          <h2 className="text-5xl text-center font-bold text-[#1a237e] mb-10">Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <h2 className="text-4xl font-bold text-[#1a237e] mb-4 mt-8 text-center">Comments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
