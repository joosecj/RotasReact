import './styles.css';
import imgHome from '../../assets/home.png';

export default function Header() {
  return (
    <header>
      <div className='header-content-container container'>
        <nav className='navbar'>
          <div className='items-menu'>
            Início
          </div>
          <div className='items-menu'>
            Produtos
          </div>
          <div className='items-menu'>
            Sobre nós
          </div>
        </nav>
        <div className='image-header'>
          <img src={imgHome} alt="Home" />
        </div>

      </div>
    </header >
  );
}