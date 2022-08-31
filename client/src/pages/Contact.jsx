import './Contact.scss';
import ContactInfo from '../components/ContactInfo';
import Map from '../components/Map';

const Contact = () => {
  return (
    <div className='contact'>
      <Map />
      <div className='contact-box'>
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
