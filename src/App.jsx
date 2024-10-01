import React from "react";
import CircularNav from "./components/CircularNav";

const App = () => {
  return (
    <CircularNav
      links={[
        { label: "HOME" },
        { label: "SERVICES" },
        { label: "PROJECTS" },
        { label: "ABOUT" },
        { label: "CONTACT" },
      ]}
      gap={4}
    />
  );
};

export default App;
