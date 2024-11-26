import React, {useContext, useState} from 'react';
import {MyContext} from './MyContext';
import { Link } from 'react-router-dom';

const QuestionPage = () => {
  const {qstns} = useContext (MyContext);
  const [totalBoard, setTotalBoard] = useState([
    { letter: "R", score: 0 },
    { letter: "I", score: 0 },
    { letter: "A", score: 0 },
    { letter: "S", score: 0 },
    { letter: "E", score: 0 },
    { letter: "C", score: 0 },
  ]);

  const [currentQst, setCurrentQst] = useState (0);

  const handleTrue = () => {

    qstns.forEach (qst => {
      if (currentQst === qst.id - 1) {
        qst.check = true;
        setTotalBoard((prevBoard)=>
            prevBoard.map((board)=>
            board.letter === qst.code ? 
    {...board, score:board.score + qst.id}:board))
    }
    });

    if (currentQst < qstns.length - 1) {
      setCurrentQst (currentQst + 1);
    }
  };

  const handleSkip = () => {
    if (currentQst < qstns.length) {
      setCurrentQst (currentQst + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center gap-5 p-10">
        <Link to={'/'}><button className='text-center text-gray-700 font-bold py-3 px-3  bg-gray-200 w-1/3 rounded-3xl shadow-lg' >{'<< Back'}</button></Link>
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
        <div>{currentQst + 1}/{qstns.length}</div>
        <div>
          {qstns[currentQst].qst}
        </div>
      </div>

      <div className="flex gap-5 font-bold text-white text-2xl justify-between">
        <button
          onClick={handleSkip}
          className="shadow-lg bg-blue-500 w-full py-3 rounded-3xl"
        >
          Skip
        </button>
        <button
          onClick={handleTrue}
          className="shadow-lg bg-green-500 py-3 w-full rounded-3xl "
        >
          True
        </button>

      </div>

    </div>
  );
};

export default QuestionPage;
