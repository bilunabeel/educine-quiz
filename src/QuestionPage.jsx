import React, {useContext, useState} from 'react';
// import QuestionCard from './components/QuestionCard';
import {MyContext} from './MyContext';
import { qstns } from './questions';

const QuestionPage = () => {
  const {totalBoard} = useContext (MyContext);

  const [currentQst, setCurrentQst] = useState (0);
  const handleButton = () => {
    if (currentQst < totalBoard.length - 1) {
      setCurrentQst (currentQst + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center gap-5 p-10">
      <div className="flex justify-center items-center gap-2 bg-white py-5 rounded-3xl shadow-lg">
        {totalBoard.map (board => (
          <div key={board.letter}>
            <div className="rounded-t-md w-10 bg-gray-600 text-center font-bold text-white">
              {board.letter}
            </div>
            <div className="font-bold text-center border border-x-gray-600 border-b-gray-600 rounded-b-md">
              {board.score}
            </div>
          </div>
        ))}
      </div>

      {/* <QuestionCard /> */}
      <div className=" h-72 bg-white shadow-lg text-gray-700 rounded-3xl p-10 font-bold text-xl leading-normal">
      {qstns[currentQst].qst}  
      </div>

      <div className="flex gap-5 font-bold text-white text-2xl justify-between">
        <button  className="shadow-lg bg-blue-500 w-full py-3 rounded-3xl">
          Skip
        </button>
        <button onClick={handleButton} className="shadow-lg bg-green-500 py-3 w-full rounded-3xl ">
          True
        </button>

      </div>

    </div>
  );
};

export default QuestionPage;
