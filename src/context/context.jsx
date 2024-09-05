
import React, { createContext, useEffect, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {


  // const [datainfo, setDatainfo] = useState("");





  const [inp, setInp] = useState("");
  const [searchres, setSearchres] = useState([]);

  useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        const res = await fetch("http://localhost:3004/products");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setSearchres(data);  

      } catch (error) {
      }
    };

    fetchDataSearch();
  }, []);


  return (
    <SearchContext.Provider value={{ inp, setInp, searchres, }}>
      {children}
    </SearchContext.Provider>
  );
};
