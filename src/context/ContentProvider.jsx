import { createContext, useState, useContext } from "react";

const ContentContext = createContext();

export function ContentProvider({ children }) {
  const [contentTitle, setContentTitle] = useState("about_me.txt");

  return (
    <ContentContext.Provider value={{ contentTitle, setContentTitle }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}