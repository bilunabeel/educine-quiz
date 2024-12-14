import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import QuestionPage from './QuestionPage';
import {MyProvider} from './MyContext.jsx';
import Final from './Final';

function App () {
  return (
    <MyProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </HashRouter>
    </MyProvider>
  );
}

export default App;
