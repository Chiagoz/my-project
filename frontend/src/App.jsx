import { Route, Routes } from 'react-router-dom'
import CalculatorPage from './Pages/CalculatorPage'
import HomePage from './Pages/HomePage'
import LandingPage from './Pages/LandingPage'
import TodoPage from './Pages/TodoPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  )
}

export default App
