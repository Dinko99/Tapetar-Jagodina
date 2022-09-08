import './Tabs.scss';
import Armchair from '../assets/icons/armchair.png';
import Chair from '../assets/icons/chair.png';
import Bed from '../assets/icons/bed.png';

const Tabs = ({ tab, setTab }) => {
  return (
    <div className='tabs'>
      <div
        className={tab === 'beds' ? 'tab-icon tab-background' : 'tab-icon'}
        onClick={() => setTab('beds')}
      >
        <img src={Bed} alt='Kreveti' />
      </div>
      <div
        className={tab === 'armchairs' ? 'tab-icon tab-background' : 'tab-icon'}
        onClick={() => setTab('armchairs')}
      >
        <img src={Armchair} alt='Fotelje' />
      </div>
      <div
        className={tab === 'chairs' ? 'tab-icon tab-background' : 'tab-icon'}
        onClick={() => setTab('chairs')}
      >
        <img src={Chair} alt='Stolice' />
      </div>
    </div>
  );
};

export default Tabs;
