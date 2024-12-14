import {  createContext,useState } from "react";
import { qstns } from "./questions";

export const MyContext = createContext()

export const MyProvider = ({children})=>{
    const [totalBoard, setTotalBoard] = useState([
        { letter: 'R', score: 0 },
        { letter: 'I', score: 0 },
        { letter: 'A', score: 0 },
        { letter: 'S', score: 0 },
        { letter: 'E', score: 0 },
        { letter: 'C', score: 0 },
      ]);

const value = {totalBoard,setTotalBoard,qstns}

return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}