import React from 'react';
import  OverLayer from './components/OverLayer'
import NavBar from './template/NavBar'
import HeloPage from './components/HeloPage';
import Logos from './components/Logos';
import Category from './components/Category';
import HoneyMoon from './components/HoneyMoon';
import FastEasy from './components/FastEasy';
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">
      <HeloPage />
      <Logos />
      <Category />
      <HoneyMoon />
      <FastEasy />
      <Footer />
    </div>
  );
}

export default App;
