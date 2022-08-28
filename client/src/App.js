import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import InfoMenu from './components/InfoMenu';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import Sidebar from './components/Sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <InfoMenu />
      <Navbar
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
