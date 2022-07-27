import React from 'react';
import './App.css';
import Feeds from './components/Feeds';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';


function App() {
  return (
    <div className="App">
      <Header />
    <div className='app__body'>
      <Sidebar />
      <Feeds />
      <Widgets />

    </div>
    </div>
    
  );
}

export default App;
