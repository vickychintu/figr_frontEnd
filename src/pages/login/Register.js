import { useSelector } from "react-redux";
import "./login.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { Outlet, Route } from "react-router-dom";
const Register = () => {
  const register = useSelector((state) => state.register);
  return (
    <div className="regPage">
      <div className="brandHalf">
        <h1>Identity</h1>
        <h4>Creating UI your way</h4>
      </div>
      <div className="loginHalf">
        <Outlet />
      </div>
    </div>
  );
};
export default Register;
