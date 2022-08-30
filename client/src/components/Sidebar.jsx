import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { AiOutlineClose } from 'react-icons/ai';
import {
  FaHome,
  FaAddressCard,
  FaImage,
  FaServer,
  FaInfoCircle,
} from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <>
      <div
        className={isSidebarOpen ? 'overlay' : 'overlay none'}
        onClick={closeSidebar}
      >
        <AiOutlineClose
          className={isSidebarOpen ? 'close-button' : 'close-button none'}
          onClick={closeSidebar}
        />
      </div>
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <Link to='/'>
          <FaHome />
          Naslovna
        </Link>
        <Link to='/gallery'>
          <FaImage />
          Galerija
        </Link>
        <Link to='/about'>
          <FaInfoCircle />O nama
        </Link>
        <Link to='/services'>
          <FaServer />
          Usluge
        </Link>
        <Link to='/contact'>
          <FaAddressCard />
          Kontakt
        </Link>
      </aside>
    </>
  );
  // }
};

export default Sidebar;
