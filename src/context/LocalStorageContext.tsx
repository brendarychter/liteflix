import { createContext, useContext, useEffect, useState } from 'react';

const LocalStorageContext = createContext<any>(null);

export const LocalStorageProvider = ({ children }: any) => {
  const [storedData, setStoredData] = useState(() => {
    const data = localStorage.getItem('my_list');
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem('my_list', JSON.stringify(storedData));
  }, [storedData]);

  const addItem = (item: any) => {
    setStoredData((prevData: any) => [...prevData, item]);
  };

  return (
    <LocalStorageContext.Provider value={{ storedData, addItem }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorage = () => {
  return useContext(LocalStorageContext);
};