import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/api';

// Function to generate a random card type
const getRandomCardType = () => {
  const cardTypes = ['basic', 'premium', 'standard'];
  const randomIndex = Math.floor(Math.random() * cardTypes.length);
  return cardTypes[randomIndex];
};

// Function to get a random image URL from Lorem Picsum
const getRandomImage = () => {
  const width = 150; // Image width
  const height = 150; // Image height
  const randomId = Math.floor(Math.random() * 1000); // Random image ID
  return `https://picsum.photos/id/${randomId}/${width}/${height}`;
};

export default function Users() {
  const { data: users, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) return <div className="text-red-500 text-center mt-4">Error fetching users</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-[#1a237e] mb-8">All Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className={`bg-white rounded-lg overflow-hidden shadow-lg p-6 flex flex-col ${getRandomCardType()}`}>
            <img src={getRandomImage()} alt="User" className="rounded-full h-16 w-16 object-cover mb-4" />
            <div className="flex flex-col">
              <a href={`/users/${user.id}`} className="text-2xl font-semibold text-blue-700 hover:underline mb-2">{user.name}</a>
              <div className="flex justify-between text-gray-600">
                <div className="flex items-center">
                  {Math.floor(Math.random() * 100)} Posts
                </div>
                <div className="flex items-center">
                  {Math.floor(Math.random() * 100)} Comments
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
