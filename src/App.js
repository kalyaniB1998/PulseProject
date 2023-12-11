
import {BrowserRouter,Routes,Route} from "react-router-dom";


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );

=======
import TopNavigation from './components/TopNavigation';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/TopNavigation' element={<TopNavigation/>}></Route>
  </Routes>

    </BrowserRouter>
);
>>>>>>> 62532b48cce9123a123f00b9c97f50f2d2354443
}

export default App;
