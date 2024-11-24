import React from 'react'
import QuestionCard from './components/QuestionCard'

const QuestionPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center gap-5 p-10">
    <div className='bg-white shadow-lg py-5 px-10 text-gray-800 font-bold text-3xl flex justify-between items-center gap-5 rounded-3xl'><p>Your Value</p>
    <div className='bg-red-600 px-5 py-2 rounded-2xl text-white'>866</div>
    </div>
    
<QuestionCard/>

    <div className="flex gap-5 font-bold text-white text-2xl justify-between">
    <button className="shadow-lg bg-blue-500 w-full py-3 rounded-3xl">
        Skip
      </button>
      <button className="shadow-lg bg-green-500 py-3 w-full rounded-3xl ">
        True
      </button>
      
    </div>
  </div>
  )
}

export default QuestionPage