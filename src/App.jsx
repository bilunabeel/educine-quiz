import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import QuestionPage from './QuestionPage';
import {MyContext} from './MyContext';
import {qstns} from './questions';

function App () {
  return (
    <MyContext.Provider value={{qstns}}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<QuestionPage />} />
        </Routes>
      </HashRouter>
    </MyContext.Provider>
  );
}

export default App;
