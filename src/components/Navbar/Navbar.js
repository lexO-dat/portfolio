import React, { useState, useEffect } from 'react';
import { RiHome5Line } from 'react-icons/ri';
import { FaTerminal } from 'react-icons/fa';
import { FaCode, FaClipboardUser } from 'react-icons/fa6';
import NavItem from './NavItem';
import { Link, useLocation } from 'react-router-dom';

const IconSideNav = () => {
  return (
    <div className="z-50 bg-black">
      <SideNav />
    </div>
  );
};

const SideNav = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setSelected(0);
        break;
      case '/projects':
        setSelected(1);
        break;
      case '/resume':
        setSelected(2);
        break;
      case '/terminal':
        setSelected(3);
        break;
      default:
        setSelected(0);
    }
  }, [location.pathname]);

  return (
    <nav className="h-[5rem] lg:h-full w-full lg:w-16 bg-black p-4 flex lg:flex-col flex-row items-center justify-around lg:justify-start gap-4 fixed bottom-0 lg:top-0 
                    lg:left-0 border-t-2 lg:border-t-0 lg:border-r-2 border-gray-900 z-50">
      <Link to="/">
      <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
          <RiHome5Line />
      </NavItem>
      <p className="ml-2 mt-1 lg:block text-white text-[10px]">Home</p>
      </Link>
      <Link to="/projects">
      <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
          <FaCode />
      </NavItem>
      <p className="mt-1 lg:block text-white text-[10px]">Projects</p>
      </Link>

      <Link to="/resume">
      <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
        <FaClipboardUser />
      </NavItem>
      <p className="ml-1 mt-1 lg:block text-white text-[10px]">Resume</p>
      </Link>

      <Link to="/terminal">
      <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
            <FaTerminal />
      </NavItem>
      <p className="mt-1 lg:block text-white text-[10px]">Terminal</p>
      </Link>
    </nav>
  );
};

export default IconSideNav;
