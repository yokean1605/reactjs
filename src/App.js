import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableHargaBarang from './tugas11/tableHargaBarang';
import Timer from './tugas12/timer';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <TableHargaBarang />
      <Timer />
    </div>
  );
}

export default App;