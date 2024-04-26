import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import { BrowserRouter, Route, Switch, Link, Routes } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import SignUp from "./pages/login/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { updateSnakState } from "./snakBarSlice";
import Dash from "./pages/dashboard/Dash";
import { useEffect } from "react";
function App() {
  const snakBar = useSelector((state) => state.snakBar);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(updateSnakState(false));
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}>
            <Route path="login" element={<Login />} />
            <Route path="" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
          </Route>
          <Route path="/dash" element={<Dash />}></Route>
        </Routes>
      </BrowserRouter>
      <Snackbar
        open={snakBar.snakBarOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snakBar.snakBarMessage}
      />
    </>
  );
}

export default App;
