import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './routes/Category';
import CategoryBody from './routes/Category/CategoryBody';
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path='home' element={<HomeBody />} />
        </Route>
        <Route path="products" element={<Category />} >
          <Route index element={<CategoryBody />} />
          <Route path=':categoryId/:prods' element={<CategoryBody />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
