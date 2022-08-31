import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import './ContactInfo.scss';

const ContactInfo = () => {
  return (
    <div className='contact-info'>
      <div className='info-box'>
        <div className='icon-div'>
          <FaMapMarkerAlt className='icon' />
        </div>
        <div className='info'>
          <h4>Jagodina, Srbija</h4>
          <p>22/3, Kragujevacki Oktobar</p>
        </div>
      </div>

      <div className='info-box'>
        <div className='icon-div'>
          <FaPhoneAlt className='icon' />
        </div>
        <div className='info'>
          <h4>+381 603 229 567</h4>
          <p>Pozovite Nas</p>
        </div>
      </div>
      <div className='info-box'>
        <div className='icon-div'>
          <GoMail className='icon' />
        </div>
        <div className='info'>
          <h4>Slavisa_diki@gmail.com</h4>
          <p>Posaljite vas upit</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
