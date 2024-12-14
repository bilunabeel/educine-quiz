import React, { useContext, useState } from 'react';
import { MyContext } from './MyContext.jsx';
import { Link, useNavigate } from 'react-router-dom';

const QuestionPage = () => {
  const { qstns,totalBoard,setTotalBoard } = useContext(MyContext);
  const navigate = useNavigate();

  

  const [currentQst, setCurrentQst] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNextQuestion = (isTrue) => {
    if (loading) return; // Prevent multiple clicks during loading

    // Update totalBoard if the answer is "True"
    if (isTrue) {
      const currentQuestion = qstns[currentQst];
      setTotalBoard((prevBoard) =>
        prevBoard.map((board) =>
          board.letter === currentQuestion.code
            ? { ...board, score: board.score + currentQuestion.id }
            : board
        )
      );
      
    }

    // Navigate to final page if it's the last question
    if (currentQst >= qstns.length - 1) {
      setLoading(true);
      setTimeout(() => navigate('/final'), 1000);
      return;
    }

    // Move to the next question
    setCurrentQst(currentQst + 1);
  };

  return (

    
    <div className="min-h-screen md:px-[30%] bg-gray-100 flex flex-col justify-center gap-5 p-10">
      <Link to={'/'}>
        <button className="text-center text-gray-700 font-bold py-3 px-3 bg-gray-200 w-1/3 rounded-3xl shadow-lg">
          {'<< Back'}
        </button>
      </Link>

      <div className="flex justify-center items-center gap-2 bg-white py-5 rounded-3xl shadow-lg">
        {totalBoard.map((board) => (
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

      <div className="h-72 bg-white shadow-lg text-gray-700 rounded-3xl p-10 font-bold text-xl leading-normal">
        <div>
          {currentQst + 1}/{qstns.length}
        </div>
        <div>{qstns[currentQst].qst}</div>
      </div>

      <div className="flex gap-5 font-bold text-white text-2xl justify-between">
        <button
          onClick={() => handleNextQuestion(false)}
          className="shadow-lg bg-blue-500 w-full py-3 rounded-3xl"
        >
          {loading && currentQst === qstns.length - 1 ? 'Loading...' : 'Skip'}
        </button>
        <button
          onClick={() => handleNextQuestion(true)}
          className="shadow-lg bg-green-500 py-3 w-full rounded-3xl"
        >
          {loading && currentQst === qstns.length - 1 ? 'Loading...' : 'True'}
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
