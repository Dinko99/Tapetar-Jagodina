import './Navbar.scss';
import Logo from '../assets/icons/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-inner-wrapper'>
        <div className='title'>
          <img src={Logo} alt='logo' className='logo' />
          <h1>Tapetar Jagodina</h1>
        </div>
        <div className='menu'>
          <Link to='/'>Naslovna</Link>
          <Link to='/gallery'>Galerija</Link>
          <Link to='/about'>O nama</Link>
          <Link to='/services'>Usluge</Link>
          <Link to='/contact'>Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
