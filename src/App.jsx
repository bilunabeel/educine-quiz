import {HashRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import QuestionPage from './QuestionPage'

function App() {

  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/question' element={<QuestionPage/>} />

    </Routes>
    </HashRouter>
  )
}

export default App
