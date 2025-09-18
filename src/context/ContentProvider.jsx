import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import DisplayBoard from "../components/DisplayBoard";
import ProjectBoard from "../components/ProjectBoard";

const ContentContext = createContext();

export function ContentProvider({ children }) {
  const [contentTitle, setContentTitle] = useState("about_me.txt");
  const [displayedContent, setDisplayedContent] = useState(<DisplayBoard />);
  const [displayedContentFlag, setDisplayedContentFlag] =
    useState("DisplayBoard");

  useEffect(() => {
    switch (displayedContentFlag) {
      case "DisplayBoard":
        setContentTitle("about_me.txt");
        setDisplayedContent(<DisplayBoard />);
        break;
      case "ProjectBoard":
        setContentTitle("my_projects.txt");
        setDisplayedContent(<ProjectBoard />);
        break;
      case "ResumeBoard":
        setContentTitle("my_projects.txt");
        setDisplayedContent(<ProjectBoard />);
        break;
    }
  }, [displayedContentFlag]);

  return (
    <ContentContext.Provider
      value={{
        displayedContent,
        setDisplayedContent,
        contentTitle,
        setContentTitle,
        displayedContentFlag,
        setDisplayedContentFlag,
      }}
    >
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
