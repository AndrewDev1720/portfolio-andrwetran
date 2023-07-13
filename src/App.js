import Header from "./Component/Header/Header";
import Banner from "./Component/Header/Banner";
import ReactLearning from "./Component/ReactLearning";
import NavBar from "./Component/Header/NavBar";
import Introduction from "./Component/Introduction/Introduction";
import { Provider } from "react-redux";
import React, { useState, createContext, useContext } from "react";
import Experience from "./Component/Experience/Experience";
import Project from "./Component/Project/Project";
import Footer from "./Component/Footer/Footer";
// import ReduxStore from "./ReduxStore";
export const FontColorContext = createContext("black");
function App() {
  const [fontColor, setFontColor] = useState("black");
  const handleThemeChange = (color) => {
    setFontColor(color);
  };
  return (
    <FontColorContext.Provider value={fontColor}>
      <div className="App">
        <Header className="introduction" onThemeChange={handleThemeChange} />
        {/* <ReactLearning>
          <h1>Hello World</h1>
        </ReactLearning> */}
        <Introduction />
        <Experience/>
        <Project/>
        <Footer/>
      </div>
    </FontColorContext.Provider>
  );
}

export default App;
