import React, { createContext, useState } from 'react';

// Create the Context
export const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [searched,useSearched] = useState('')
  return (
    <MyContext.Provider value={{ user, setUser,searched,useSearched }}>
      {children}
    </MyContext.Provider>
  );
};
