// SearchFocusContext.tsx
import React, { createContext, useRef, useContext } from 'react';

const SearchFocusContext = createContext<React.RefObject<HTMLInputElement> | null>(null);

export const useSearchFocus = () => useContext(SearchFocusContext);

export const SearchFocusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <SearchFocusContext.Provider value={inputRef}>
      {children}
    </SearchFocusContext.Provider>
  );
};
