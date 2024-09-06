
import React, { createContext, useEffect, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {


  const [inp, setInp] = useState("");
  const [searchres, setSearchres] = useState([]);

  const [ userinfo, setUserinfo]= useState(null)


  const [activeuser,setActiveuser] = useState(true)




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
    <SearchContext.Provider value={{ inp, setInp, searchres,userinfo,setUserinfo,activeuser,setActiveuser }}>
      {children}
    </SearchContext.Provider>
  );
};
