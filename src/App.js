import logo from "./logo.svg";
import "./App.css";
import Main from "./comoponet/main";
import Login from "./auth/Login";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import SignInSide from "./auth/Login";
import Registration from "./auth/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path='/login' element={<SignInSide></SignInSide>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
      </Routes>
      {/* <Login></Login> */}
    </>
  );
}

export default App;
