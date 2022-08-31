import './Contact.scss';
import ContactInfo from '../components/ContactInfo';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className='contact'>
      <Map />
      <div className='contact-box'>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
