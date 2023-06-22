import { Routes, Route } from "react-router";
// import Logout from './pages/Logout/Logout'
// import Login from './pages/Login'
import Main from "./Components/pages/MainPage/Main";
import Map from "./Components/pages/DetailPage/Location/Map";
import Register from "./Components/pages/DetailPage/Register/Register";
import Login from "./Components/pages/DetailPage/Login/Login";
import Account from "./Components/pages/DetailPage/Account/Account";
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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Account" element={<Account />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
