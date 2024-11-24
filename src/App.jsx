import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import QuesetionCard from './components/QuesetionCard'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/qcard' element={<QuesetionCard/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
