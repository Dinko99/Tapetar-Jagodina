import './Home.scss';
import HomeBcg from '../assets/images/home-background.jpg';
import { Link } from 'react-router-dom';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home-overlay'></div>
        <img src={HomeBcg} alt='Background' loading='lazy' />
        <h4>presvlačenje svih vrsta nameštaja</h4>
        <h1>Tapetarske Usluge</h1>
        <p>
          Nudimo profesionalne tapetarske usluge na celoj teritoriji Jagodine i
          u okolini, brzo i efikasno, uvek u dogovorenom roku.
        </p>
        <Link to='/contact'>
          <button className='primary-btn'>kontaktirajte nas</button>
        </Link>
      </div>
      <HomeInfo />
    </>
  );
};

export default Home;
