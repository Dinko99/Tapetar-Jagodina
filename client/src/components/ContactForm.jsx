import './ContactForm.scss';

const ContactForm = () => {
  return (
    <form>
      <div className='input-container'>
        <input type='text' placeholder='Upišite ime' />
        <input type='text' placeholder='Upišite broj telefona' />
        <input type='email' placeholder='Upišite email adresu' />
      </div>

      <textarea cols='30' rows='10' placeholder='Pošaljite poruku '></textarea>
      <button className='submit'>Pošaljite poruku</button>
    </form>
  );
};

export default ContactForm;
