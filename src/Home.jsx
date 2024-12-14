import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center bg-gray-50 px-4  mx-auto text-center">
      <h1 className="text-blue-500 font-bold text-6xl leading-snug">
        Welcome to <br /><span className="text-red-500 text-6xl">Educine</span>
      </h1>
      <h2 className="text-gray-800 text-xl font-bold">
        Let's find your Personality!
      </h2>

      <Link to={'/question'}>
        <button className="w-1/3 max-md:w-2/3 py-3 px-8 rounded-3xl text-3xl text-white font-bold hover:bg-green-600 bg-green-500">
          Go
        </button>
      </Link>

    </div>
  )
}

export default Home