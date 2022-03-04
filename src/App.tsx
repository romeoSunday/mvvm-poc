import React from 'react';
import './App.css';
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import FourthStep from "./components/FourthStep";
import Congrats from "./components/Congrats";
import ThirdStep from "./components/ThirdStep";

function App() {
  return (
    <div className="App">
      <FirstStep />
      <SecondStep />
      <ThirdStep />
      <FourthStep />
      <Congrats />
    </div>
  );
}

export default App;
