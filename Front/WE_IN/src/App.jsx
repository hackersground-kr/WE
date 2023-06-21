import { Routes, Route } from "react-router";
// import Logout from './pages/Logout/Logout'
// import Login from './pages/Login'
import Main from "./Components/pages/MainPage/Main";
import Register from "./Components/pages/DetailPage/Register/Register";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/Login' element={<Login />} />
        <Route path='/Logout' element={<Logout />}/> */}
        <Route path="/Main" element={<Main />} />
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
