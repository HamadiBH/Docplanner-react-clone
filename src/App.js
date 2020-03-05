import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Lead from './components/lead';
import Services from './components/services';
import Brands from './components/brands';
import Stats from './components/stats';
import Offices from './components/offices';
import Footer from './components/footer';
import {menu, litm, srvc, brnds, stts, ofcs, ftritms } from "./data";




function App() {
  return (
    <div className="App">
      <Navbar x={menu} />
      <Lead x={litm} />
      <Services x={srvc} />
      <Brands x={brnds} />
      <Stats x={stts} />
      <Offices x={ofcs} />
      <Footer x={ftritms} />
    </div>
  );
}


export default App;
