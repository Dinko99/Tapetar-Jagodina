import './Services.scss';
import Furniture from '../assets/images/furniture.jpg';
import Restaurant from '../assets/images/restaurant.jpg';
import Bus from '../assets/images/bus.jpg';

const Services = () => {
  return (
    <section className='services'>
      <h1>Usluge Koje Nudimo</h1>
      <div className='services-image-container'>
        <div className='image-box'>
          <img src={Furniture} alt='Furniture' />
          <p>
            Presvlačenje dvoseda, troseda, fotelja, ugaonih garnitura, stolica,
            taburea...
          </p>
        </div>
        <div className='image-box'>
          <img src={Restaurant} alt='Restaurant' />
          <p>
            Presvlačenje nameštaja u restoranima, kafićima, radnim objektima...
          </p>
        </div>
        <div className='image-box'>
          <img src={Bus} alt='Bus' />
          <p>Presvlačenje sedišta u autobusima, vozovima, kamionima...</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
