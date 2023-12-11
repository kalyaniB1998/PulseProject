import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/">Logout</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
