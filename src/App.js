import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import TopNavigation from "./components/TopNavigation";
import ForgotPassword from "./components/ForgotPassword";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/TopNavigation' element={<TopNavigation/>}></Route>
      <Route path='Forgot password' element={<ForgotPassword/>}></Route>
  </Routes>
    </BrowserRouter>
);

}



export default App;
