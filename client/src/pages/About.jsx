import './About.scss';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='about'>
      <h1>O Nama.</h1>
      <p>
        Naša tapetarska radnja postoji više od 10 godina i nalazi se u Jagodini,
        bavimo se presvlačenjem, tapaciranjem i popravkom svih vrsta nameštaja.
        Ukoliko želite da prepravite ili modernizujete svoj nameštaj ovo je
        pravo mesto za vas.
        <br />
        Poštujemo rokove i insistiramo na kvalitetno obavljenom poslu u želji da
        naši klijenti budu zadovoljni.
      </p>
      <p>
        Tokom godina stekli smo poverenje velikog broja zadovoljnih klijenata
        preko kojih dobijamo dosta preporuka.
        <br />
        Presvlačimo nameštaj materijalom po želji.
        <br />
        Naše usluge izvršavamo profesionalno i efikasno, 7 dana u nedelji.
      </p>
      <Link to='/contact'>
        <button>Kontakt</button>
      </Link>
    </section>
  );
};

export default About;
