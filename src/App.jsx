import {HashRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import QuesetionCard from './components/QuesetionCard'

function App() {

  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/qcard' element={<QuesetionCard/>} />

    </Routes>
    </HashRouter>
  )
}

export default App
