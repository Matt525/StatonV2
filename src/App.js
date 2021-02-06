import React from "react";
import Landing from './Landing';
import Navigation from './Navigation';

import "./styles.css";


const e1 = document.getElementById("e1_2");

export default function App() {
  
  return (
    <div className="App">
        <Navigation />
        <Landing />
    </div>
  );
}
