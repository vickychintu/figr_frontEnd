import { useSelector } from "react-redux";
import "./login.css";
import { onLoginSubmit } from "./loginFunc";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const register = useSelector((state) => state.register);
  let navigate = useNavigate();
  const routeChange = () => {
    console.log("into route change");
    let path = `signUp`;
    navigate(path);
  };
  const routeMain = () => {
    let path = "../../dash";
    navigate(path);
  };
  return (
    <form
      className="loginform"
      onSubmit={async (e) => {
        const res = onLoginSubmit(e);
        if (res) {
          routeMain();
        }
      }}
    >
      <div className="userSec inputEle">
        <label for="email">Email</label>
        <input type="text" name="email" placeholder="xyz@example.com"></input>
        {!register.emailStatus && (
          <span className="inputErrors">! invalid email</span>
        )}
      </div>
      <div className="passdSec inputEle">
        <label for="passwd">Password</label>
        <input type="password" name="passwd"></input>
        {!register.passdStatus && (
          <span className="inputErrors">! invalid password</span>
        )}
      </div>
      <div id="submitSec">
        <input type="submit" value="Login" />
      </div>
      <p id="regLink" onClick={routeChange}>
        click here to register
      </p>
    </form>
  );
};
export default Login;
