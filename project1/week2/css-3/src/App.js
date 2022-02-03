import './App.css';
import React from 'react';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Body from './components/Body/Body'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row backgroundGradient">
        <div className="w-full">
          <Header />
          <Nav />
          <Body />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
