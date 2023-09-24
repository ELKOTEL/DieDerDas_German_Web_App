import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddWordForm from './components/AddWordForm';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <AddWordForm/>
    </div>
  );
}

export default App;
