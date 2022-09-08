import './Gallery.scss';
import armchairImages from '../utils/armchairImages';
import bedImages from '../utils/bedImages';
import { useState } from 'react';

const Gallery = () => {
  const [tab, setTab] = useState('beds');
  if (tab === 'armchairs') {
    return (
      <div className='gallery'>
        {armchairImages.map((item) => {
          return <img key={item.id} src={item.image} alt={item.image} />;
        })}
      </div>
    );
  } else if (tab === 'beds') {
    return (
      <div className='gallery'>
        {bedImages.map((item) => {
          return <img key={item.id} src={item.image} alt={item.image} />;
        })}
      </div>
    );
  }
};

export default Gallery;
