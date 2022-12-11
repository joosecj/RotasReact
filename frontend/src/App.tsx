import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} >
        <Route index element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
