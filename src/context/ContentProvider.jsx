import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const ContentContext = createContext();

export function ContentProvider({ children }) {
  const [contentTitle, setContentTitle] = useState("about_me.txt");

  return (
    <ContentContext.Provider value={{ contentTitle, setContentTitle }}>
      {children}
    </ContentContext.Provider>
  );
}

// prop validation
ContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useContent() {
  return useContext(ContentContext);
}
