import LineButton from '@/components/LineButton';
import Link from 'next/link';
import React from 'react';



const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10   text-gray-800">
      <h1 className="text-6xl font-[700] mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="px-6 py-2 rounded-md   transition-colors"
      >
        <LineButton text='Go home' />
      </Link>
    </div>
  );
};

export default NotFound;
