import React, {useContext, useEffect} from 'react';
import {MyContext} from './MyContext.jsx';

const Final = () => {
  const {totalBoard, setTotalBoard} = useContext (MyContext);
  useEffect(() => {
    
  setTotalBoard((board)=>[...board].sort((a,b)=>b.score - a.score))
    
  }, [setTotalBoard])  

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="font-bold text-center text-gray-800 text-3xl ">
        Your Interest Code is
      </h1>
      <div className="py-4 px-5 rounded-3xl flex gap-3">
        
          <h1 className='text-center text-7xl font-bold text-green-700'>{totalBoard[0].letter}</h1>
          <h1 className='text-center text-7xl font-bold text-green-700'>{totalBoard[1].letter}</h1>
          <h1 className='text-center text-7xl font-bold text-green-700'>{totalBoard[2].letter}</h1>
        
      </div>
    </div>
  );
};

export default Final;
