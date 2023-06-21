import { Routes, Route } from "react-router";
// import Logout from './pages/Logout/Logout'
// import Login from './pages/Login'
import Main from "./Components/pages/MainPage/Main";
import Map from "./Components/pages/DetailPage/Location/Map";
import Register from "./Components/pages/DetailPage/Register/Register";

import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard-Regular",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path='/Login' element={<Login />} />
        <Route path='/Logout' element={<Logout />}/> */}
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
