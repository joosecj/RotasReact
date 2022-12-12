import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryMenu from './components/CategoryMenu'
import Category from './routes/Catalog/Category'
import CategoryBody from './routes/Catalog/Category/CategoryBody'

import Home from './routes/Home'
import HomeBody from './routes/Home/HomeBody'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} >
        <Route index element={<Navigate to="/home" />} />
        <Route path='home' element={<HomeBody/>} />
        <Route path="menu" element={<Category/>} />
        <Route path="product-details" element={<CategoryBody />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
