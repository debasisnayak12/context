import React from 'react';
import Hii from './Component/Hii';
import Hello from './Component/Hello';
import CricketerProvider from './context/CricketerProvider';


function App() {
  return (
    <div className="App">
      <Hii/>

      {/* <CricketerProvider>
        <Hii/>
        <Hello/>
      </CricketerProvider> */}
    </div>
  );
}

export default App;
