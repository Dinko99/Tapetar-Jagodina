import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  if (!isSidebarOpen) {
    return null;
  } else {
    return (
      <>
        <div className='overlay' onClick={closeSidebar}></div>
        <div className='sidebar'>
          <Link to='/'>Naslovna</Link>
          <Link to='/gallery'>Galerija</Link>
          <Link to='/about'>O nama</Link>
          <Link to='/services'>Usluge</Link>
          <Link to='/contact'>Kontakt</Link>
        </div>
        <AiOutlineClose className='close-button' onClick={closeSidebar} />
      </>
    );
  }
};

export default Sidebar;
