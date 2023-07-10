import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom"
import LogIn from "./components/LogIn";
// import "./styles/LogIn.css";
import LogOut from './components/Logout';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </div>
    </>
  );
}


export default App;