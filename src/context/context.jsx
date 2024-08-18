import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [inp, setInp] = useState("");

  return (
    <SearchContext.Provider value={{ inp, setInp }}>
      {children}
    </SearchContext.Provider>
  );
};
