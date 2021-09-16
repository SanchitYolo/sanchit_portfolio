import React from "react";
import "./App.scss";
import SideMenu from "./components/SideMenu";
import MainContent from "./components/MainContent";

function App() {
  return (
    <React.Fragment>
      <SideMenu />
      <MainContent />
    </React.Fragment>
  );
}

export default App;
