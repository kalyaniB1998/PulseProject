import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import TopNavigation from "./components/TopNavigation";
import GetReport from "./components/GetReport";
import Tasks from "./components/Tasks";
import Ranking from "./components/Ranking";
import FeeReport from "./components/FeeReport";
import ManageTask from "./components/ManageTask";
import Messages from "./components/Messages";
import Requests from "./components/Requests";
import BatchesSummary from "./components/BatchesSummary";
import ManageUser from "./components/ManageUser";
import ForgotPassword from "./components/ForgotPassword";
import Presentation from "./components/Presentation";
import TaskReview from "./components/TaskReview";
import CreateTask from "./components/CreateTask";
import ClassAttendance from "./components/ClassAttendance";
import ReviewPresentation from "./components/ReviewPresentation";

import SubmissionDetails from "./components/SubmissionDetails";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/task' element={<Tasks/>}></Route>
      <Route path='/ranking' element={<Ranking/>}></Route>
      <Route path='/feeReport' element={<FeeReport/>}></Route>
      <Route path='/batchesSummary' element={<BatchesSummary/>}></Route>
      <Route path='/requests' element={<Requests/>}></Route>
      <Route path='/messages' element={<Messages/>}></Route>
      <Route path='/manageTask' element={<ManageTask/>}></Route>
      <Route path='/manageUser' element={<ManageUser/>}></Route>
      <Route path='/topNavigation' element={<TopNavigation/>}></Route>
      <Route path='/getreport' element={<GetReport/>}></Route>

      <Route path='/presentation' element={<Presentation/>}></Route>
      <Route path='/taskReview' element={<TaskReview/>}></Route>
      <Route path='/createTask' element={<CreateTask/>}></Route>
      <Route path='/classAttendance' element={<ClassAttendance/>}></Route>
      <Route path='/reviewPresentaion' element={<ReviewPresentation/>}></Route>


      <Route path='/Forgot password' element={<ForgotPassword/>}></Route>
      <Route path="/submissiondetails" element={<SubmissionDetails/>}></Route>

      <Route path='forgot password' element={<ForgotPassword/>}></Route>
</Routes>

    </BrowserRouter>
);

}



export default App;
