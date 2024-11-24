import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto text-center">
      <h1 className="text-blue-600 font-bold text-6xl">
        Welcome to <span className="text-red-600">Educine</span>
      </h1>
      <h2 className="text-gray-800 mt-8 font-bold">
        Let's find your Personality!
      </h2>

      <Link to={'/qcard'}>
        <button className="mt-5 py-3 px-8 rounded-full text-xl text-white font-bold bg-blue-700">
          Go
        </button>
      </Link>

    </div>
  );
};

export default Welcome;
