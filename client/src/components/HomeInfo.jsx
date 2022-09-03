import './HomeInfo.scss';
import { AiFillSchedule, AiFillEuroCircle } from 'react-icons/ai';
import { IoIosTime } from 'react-icons/io';
import { Link } from 'react-router-dom';

const HomeInfo = () => {
  return (
    <section className='home-info'>
      <div className='home-info-box'>
        <AiFillEuroCircle />
        <h1>Najbolje Cene</h1>
        <p>
          Usluge dostupne svakome.
          <br />
          Naše cene su najpristupačnije u Jagodini i regionu, dođite i lično se
          uverite.
        </p>
      </div>
      <div className='home-info-box'>
        <IoIosTime />
        <h1>Radno Vreme</h1>
        <p>
          Ponedeljak - Petak: 18:00-21:00
          <br />
          Subota - Nedelja: 11:00-21:00
          <br />
          Posetite nas u lokalu tokom našeg radnog vremena ili nas{' '}
          <Link to='/contact'>kontaktirajte.</Link>
        </p>
      </div>
      <div className='home-info-box'>
        <AiFillSchedule />
        <h1>Dogovoreni Rokovi</h1>
        <p>
          Uvek se trudimo da završimo posao u najkraćem mogućem roku i nikad ne
          odstupamo od dogovorenog roka.
        </p>
      </div>
    </section>
  );
};

export default HomeInfo;
