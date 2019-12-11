import React from 'react';
import logo from './logo.svg';
import './App.css';
import DenseAppBar from './components/DenseAppBar';

function App() {
  return (
    <div className="App">
      {DenseAppBar()}
    </div>
  );
}

export default App;
