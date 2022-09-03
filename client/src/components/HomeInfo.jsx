import './HomeInfo.scss';
import { AiFillSchedule, AiFillEuroCircle } from 'react-icons/ai';
import { IoIosTime } from 'react-icons/io';

const HomeInfo = () => {
  return (
    <section className='home-info'>
      <div className='home-info-box'>
        <IoIosTime />
        <h1>Radno Vreme</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ullam
          ut maiores obcaecati, autem saepe a id molestias minima. Assumenda.
        </p>
      </div>
      <div className='home-info-box'>
        <AiFillSchedule />
        <h1>Najbolje Cene</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ullam
          ut maiores obcaecati, autem saepe a id molestias minima. Assumenda.
        </p>
      </div>
      <div className='home-info-box'>
        <AiFillEuroCircle />
        <h1>Dogovoreni Rokovi</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ullam
          ut maiores obcaecati, autem saepe a id molestias minima. Assumenda.
        </p>
      </div>
    </section>
  );
};

export default HomeInfo;
