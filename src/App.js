import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

import './App.css';



function App() {
  return (

//BEM
    <div className="app">
      {/* side-bar */}
      < Sidebar />
      {/* feed */}
      <Feed />
      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;



// This page is the main app component