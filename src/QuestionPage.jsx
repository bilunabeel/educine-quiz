import React from 'react';
import QuestionCard from './components/QuestionCard';

const QuestionPage = () => {

const totalBoard = [
    {letter:'R',score:888},{letter:'I',score:888},{letter:'A',score:888},{letter:'S',score:668},{letter:'E',score:888},{letter:'C',score:888}
]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center gap-5 p-10">
        <div className='flex justify-center items-center gap-2 bg-white py-5 rounded-3xl'>
{totalBoard.map((board)=>(
    <div className=''>
        <div className='rounded-t-lg w-10 bg-red-500 text-center font-bold text-white'>{board.letter}</div>
        <div className='font-bold text-center border border-x-black border-b-black rounded-b-lg'>{board.score}</div>
    </div>
))}
        </div>
      {/* <div className="bg-white shadow-lg py-5 text-gray-800 font-bold text-3xl flex flex-col justify-between items-center rounded-3xl">
        <div className="flex gap-3">
          <div className="bg-gray-600 w-10 flex justify-center text-lg text-white ">
            R
          </div>
          <div className="bg-gray-600 w-10 flex justify-center text-lg text-white ">
            I
          </div>
          <div className="bg-gray-600 w-10 flex justify-center text-lg text-white ">
            A
          </div>
          <div className="bg-gray-600 w-10 flex justify-center text-lg text-white ">
            S
          </div>
          <div className="bg-gray-600 w-10 flex justify-center text-lg text-white ">
            E
          </div>
          <div className="bg-gray-600 w-10 flex justify-center text-lg text-white ">
            C
          </div>
        </div>
        <div className="flex gap-3">
          <div className="border border-b-black border-x-black w-10 flex justify-center text-lg  ">
            888
          </div>
          <div className="border border-b-black border-x-black w-10 flex justify-center text-lg  ">
            888
          </div>
          <div className="border border-b-black border-x-black w-10 flex justify-center text-lg  ">
            888
          </div>
          <div className="border border-b-black border-x-black w-10 flex justify-center text-lg  ">
            888
          </div>
          <div className="border border-b-black border-x-black w-10 flex justify-center text-lg  ">
            888
          </div>
          <div className="border border-b-black border-x-black w-10 flex justify-center text-lg  ">
            888
          </div>
        </div>
      </div> */}

      <QuestionCard />

      <div className="flex gap-5 font-bold text-white text-2xl justify-between">
        <button className="shadow-lg bg-blue-500 w-full py-3 rounded-3xl">
          Skip
        </button>
        <button className="shadow-lg bg-green-500 py-3 w-full rounded-3xl ">
          True
        </button>

      </div>

    </div>
  );
};

export default QuestionPage;
