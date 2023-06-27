import Header from './Component/Header/Header';
import Banner from './Component/Header/Banner';
import ReactLearning from './Component/ReactLearning';
import NavBar from './Component/Header/NavBar';
import Introduction from './Component/Header/Introduction';
import { Provider } from "react-redux";
import React, { useState, createContext, useContext } from "react";
// import ReduxStore from "./ReduxStore";
export const FontColorContext = createContext("black");
function App() {
  const [fontColor, setFontColor] = useState("black");
  const handleThemeChange = (color) => {
    setFontColor(color);
  }
  return (
    <FontColorContext.Provider value={fontColor}>
      <div className="App">
        <Header className="introduction" onThemeChange={handleThemeChange}>
        </Header>
        <ReactLearning>
          <h1>Hello World</h1>
        </ReactLearning>
      </div>
    </FontColorContext.Provider>
  );
}

export default App;
