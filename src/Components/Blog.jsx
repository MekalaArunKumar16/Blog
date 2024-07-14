import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogById, fetchCommentsByBlogId } from '../api/api';
import { FaSpinner } from 'react-icons/fa';

export default function Blog() {
  const { id } = useParams();

  const { data: blog, error: blogError, isLoading: blogLoading } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlogById(id)
  });

  const { data: comments, error: commentsError, isLoading: commentsLoading } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => fetchCommentsByBlogId(id)
  });

  if (blogLoading || commentsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  if (blogError) return <div className="text-red-500 text-center mt-4">Error fetching blog</div>;
  if (commentsError) return <div className="text-red-500 text-center mt-4">Error fetching comments</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-[#1a237e] mb-4">{blog.title}</h1>
        <p className="text-gray-700 mb-6">{blog.body}</p>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-[#1a237e] mb-4">Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="mb-4 pb-4 border-b border-gray-300">
              <p className="text-gray-800 leading-relaxed mb-2">{comment.body}</p>
              <small className="text-gray-600">Comment by: {comment.email}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
