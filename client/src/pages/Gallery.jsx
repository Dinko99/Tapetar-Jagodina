import './Gallery.scss';
import armchairImages from '../utils/armchairImages';
import bedImages from '../utils/bedImages';
import chairImages from '../utils/chairImages';
import { useState } from 'react';
import Tabs from '../components/Tabs';

const Gallery = () => {
  const [tab, setTab] = useState('beds');

  if (tab === 'armchairs') {
    return (
      <>
        <Tabs tab={tab} setTab={setTab} />
        <div className='gallery'>
          {armchairImages.map((item) => {
            return <img key={item.id} src={item.image} alt={item.image} />;
          })}
        </div>
      </>
    );
  } else if (tab === 'beds') {
    return (
      <>
        <Tabs tab={tab} setTab={setTab} />
        <div className='gallery'>
          {bedImages.map((item) => {
            return <img key={item.id} src={item.image} alt={item.image} />;
          })}
        </div>
      </>
    );
  } else if (tab === 'chairs') {
    return (
      <>
        <Tabs tab={tab} setTab={setTab} />
        <div className='gallery'>
          {chairImages.map((item) => {
            return <img key={item.id} src={item.image} alt={item.image} />;
          })}
        </div>
      </>
    );
  }
};

export default Gallery;
