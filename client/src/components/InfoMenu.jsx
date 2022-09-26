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
          <a
            href='https://www.google.com/maps/place/%D0%A2%D1%80%D0%B3+%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD%D0%B0+%D0%9F%D0%B0%D0%BD%D1%82%D0%B8%D1%9B%D0%B0/@43.9786341,21.2469899,17z/data=!3m1!4b1!4m5!3m4!1s0x4756c4693c0de859:0x776c241fb6d5d2a9!8m2!3d43.9786303!4d21.2491786'
            target='_blank'
            rel='noreferrer'
          >
            <FaMapMarkerAlt />
          </a>
        </div>
        <div className='personal-info'>
          <a href='tel:+381603229567'>+381 603 229 567</a>
          <a href='#'>tapetar035@gmail.com</a>
        </div>
      </div>
    </nav>
  );
};

export default InfoMenu;
