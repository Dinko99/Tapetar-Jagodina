import './ContactForm.scss';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Uspešno ste poslali poruku');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <div className='input-container'>
        <input type='text' name='name' placeholder='Upišite ime' />
        <input type='text' name='phone' placeholder='Upišite broj telefona' />
        <input
          required
          type='email'
          name='email'
          placeholder='Upišite email adresu'
        />
      </div>

      <textarea
        cols='30'
        rows='10'
        required
        name='message'
        placeholder='Pošaljite poruku '
      ></textarea>
      <button className='submit'>Pošaljite poruku</button>
    </form>
  );
};

export default ContactForm;
