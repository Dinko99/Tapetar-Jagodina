import './InfoMenu.scss';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const InfoMenu = () => {
  return (
    <nav className='info-menu'>
      <div className='info-menu-inner-wrapper'>
        <div className='social-icons'>
          <a
            href='https://www.facebook.com/profile.php?id=100061266281596'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebookF />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
          <a href='#'>
            <FaMapMarkerAlt />
          </a>
        </div>
        <div className='personal-info'>
          <a href='tel:+381603229567'>+381 603 229 567</a>
          <a href='mailto:tapetar035@gmail.com?body=My custom mail body'>
            tapetar035@gmail.com
          </a>
        </div>
      </div>
    </nav>
  );
};

export default InfoMenu;
