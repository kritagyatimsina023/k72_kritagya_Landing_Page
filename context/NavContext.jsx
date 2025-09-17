'use client';
import { usePathname } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react';

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();

const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navbarColor, setnavbarColor] = useState('white');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/agence' || pathname === '/project') {
      setnavbarColor('black');
    } else {
      setnavbarColor('white');
    }
  }, [pathname]);

  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navbarColor, setnavbarColor]}>
          {children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
