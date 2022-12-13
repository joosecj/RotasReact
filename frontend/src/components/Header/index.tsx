import './styles.css';
import imgHome from '../../assets/home.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className='header-content-container container'>
        <nav className='navbar'>
          <NavLink to="/" className='items-menu'>
            Início
          </NavLink>
          <NavLink to="/products" className='items-menu'>
            Produtos
          </NavLink>
          <NavLink to="/about" className='items-menu'>
            Sobre nós
          </NavLink>
        </nav>
        <div className='image-header'>
          <NavLink to="/">
            <img src={imgHome} alt="Home" />
          </NavLink>
        </div>
      </div>
    </header >
  );
}