import React from 'react';

const QuesetionCard = () => {
  return (
    <div className="min-h-screen bg-yellow-500 flex flex-col justify-center gap-5 p-10">
      <div className='bg-gray-300 py-5 px-10 text-gray-800 font-bold text-3xl flex justify-between items-center gap-5 rounded-3xl'><p>Your Value</p>
      <div className='bg-red-600 px-5 py-2 rounded-2xl text-white'>866</div>
      </div>
      <div className=" bg-gray-300 text-gray-700 rounded-3xl p-10 textce font-bold text-4xl leading-relaxed">
        What is your favorite Fruit?
      </div>
      <div className="flex gap-5 font-bold text-white text-2xl justify-between">
        <button className="bg-green-700 py-3 w-full rounded-full ">
          True
        </button>
        <button className="bg-blue-700 w-full py-3 rounded-full ">
          Skip
        </button>
      </div>
    </div>
  );
};

export default QuesetionCard;
