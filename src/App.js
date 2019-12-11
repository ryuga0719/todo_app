import React from 'react';
import logo from './logo.svg';
import './App.css';
import DenseAppBar from './components/DenseAppBar';
import TodoApp from './components/ToDo';

function App() {
  return (
    <div className="App">
      {DenseAppBar()}
      <TodoApp />
    </div>
  );
}

export default App;
