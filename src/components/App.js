import "./App.css";
import { useState } from "react";
import Homescreen from "./Homescreen";
import icon from "./iconsvg/icon.svg"
function App() {
  const [botscreen, setbotscreen] = useState(false);
  return (
    <div className="App">
        <h1 className="heading" style={botscreen? {display: "none"}: {}}>Click the chatbot icon on the right bottom of the page</h1>
        <div className="icon-container" style={botscreen? {display: "none"}: {}} onClick={()=> setbotscreen(true)}>
            <img src={icon} alt="logo"></img>
        </div>
        {botscreen && <Homescreen setbotscreen={setbotscreen} />}   
    </div>
  );
}

export default App;
