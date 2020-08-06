import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tugas11 from './tugas11/TableHargaBarang';
import Tugas12 from './tugas12/Timer';
import Tugas13 from './tugas13/CrudDaftarBuah';
import Tugas14 from './tugas14/Hooks'

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", width: "100vw" }}>
        <div style={{ display: "block", width: "30vw" }} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 style={{ margin: "0px" }}>Sanbercode</h3>
          <h3 style={{ margin: "0px" }}>React JS</h3>
        </div>
        <div style={{ display: "block", width: "70vw" }}>
          {/* <Tugas11 /> */}
          {/* <Tugas12 start={100} /> */}
          {/* <Tugas13 /> */}
          <Tugas14 />
        </div>
      </div>
    </div>
  );
}

export default App;