import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import { BrowserRouter, Route, Switch, Link, Routes } from "react-router-dom";
import SignUp from "./pages/login/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}>
          <Route path="login" element={<Login />} />
          <Route path="" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
