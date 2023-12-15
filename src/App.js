import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import TopNavigation from "./components/TopNavigation";

import Tasks from "./components/Tasks";
import Ranking from "./components/Ranking";
import FeeReport from "./components/FeeReport";
import ManageTask from "./components/ManageTask";
import Messages from "./components/Messages";
import Requests from "./components/Requests";
import BatchesSummary from "./components/BatchesSummary";
import ManageUser from "./components/ManageUser";

import ForgotPassword from "./components/ForgotPassword";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/task' element={<Tasks/>}></Route>
      <Route path='/Ranking' element={<Ranking/>}></Route>
      <Route path='/FeeReport' element={<FeeReport/>}></Route>
      <Route path='/BatchesSummary' element={<BatchesSummary/>}></Route>
      <Route path='/Requests' element={<Requests/>}></Route>
      <Route path='/Messages' element={<Messages/>}></Route>
      <Route path='/ManageTask' element={<ManageTask/>}></Route>
      <Route path='/ManageUser' element={<ManageUser/>}></Route>
      <Route path='/TopNavigation' element={<TopNavigation/>}></Route>

      

      <Route path='Forgot password' element={<ForgotPassword/>}></Route>

  </Routes>
    </BrowserRouter>
);

}



export default App;
