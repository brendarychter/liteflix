import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext<any>(null);

export const NavBarProvider = ({ children }: any) => {
  const [isNavBarOpen, setNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setNavBarOpen(!isNavBarOpen);
  };

  return (
    <NavbarContext.Provider value={{ isNavBarOpen, toggleNavBar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavBar = () => {
  return useContext(NavbarContext);
};
