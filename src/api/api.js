// src/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchBlogs = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const fetchCommentsByBlogId = async (id) => {
  const response = await axios.get(`${API_URL}/posts/${id}/comments`);
  return response.data;
};

export const fetchUserDetails = async (id) => {
  const response = await axios.get(`${API_URL}/users/${id}`);
  return response.data;
};

export const fetchCommentsByUserId = async (id) => {
  const response = await axios.get(`${API_URL}/users/${id}/comments`);
  return response.data;
};

export const fetchBlogsByUserId = async (id) => {
  const response = await axios.get(`${API_URL}/users/${id}/posts`);
  return response.data;
};

export const fetchBlogById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};



