import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <h3>Tapetar Jagodina</h3>
      <div className='footer-menu'>
        <Link to='/'>Naslovna</Link>
        <Link to='/gallery'>Galerija</Link>
        <Link to='/about'>O nama</Link>
        <Link to='/services'>Usluge</Link>
        <Link to='/contact'>Kontakt</Link>
      </div>
      <p>Copyrights © 2022</p>
    </footer>
  );
};

export default Footer;
