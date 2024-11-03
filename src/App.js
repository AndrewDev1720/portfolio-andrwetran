import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import React, { useState, createContext } from "react";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
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
