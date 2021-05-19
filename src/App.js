import React ,{useState} from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import {SliderData} from './data/SliderData';
import {InfoData} from './data/InfoData';

import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';


function App() {

  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <GlobalStyle />
     <Navbar toggle={toggle}/>
     <Dropdown isOpen={isOpen} toggle={toggle}/>
     <Hero slides={SliderData}/>
    <InfoSection {...InfoData}/>

    </div>
  );
}

export default App;
