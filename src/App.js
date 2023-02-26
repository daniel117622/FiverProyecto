import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import './index.css';
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
