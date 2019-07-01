import React from 'react';
import './App.css';
import A from './components/A';
import B from './components/B';
import C from './components/C';


const BComponent=A(B);
const CComponent=A(C);

function App() {
  return (
    <div className="App">
      <BComponent/>
      <CComponent/>
    </div>
  );
}

export default App;
