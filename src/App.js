import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom"
import LogIn from "./components/pages/LogIn";
import "./styles/LogIn.css";
import LogOut from './components/pages/LogOut';


function App() {
    return (
      <>
      <Navbar />
      
     
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/LogOut" element={<LogOut />} />
        </Routes>
        </div>
      </>
    );
  }
  
  export default App;