
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Login></Login>
      
      <h1> This line added by Kalyani </h1> 
    </div>
  );
}

export default App;
