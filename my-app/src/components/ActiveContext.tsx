import React, { createContext, useState, ReactNode } from 'react';

type ActiveContextProps = {
  active: string | null;
  setActive: (active: string | null) => void;
}

export const ActiveContext = createContext<ActiveContextProps | undefined>(undefined);

const ActiveContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContextProvider;
