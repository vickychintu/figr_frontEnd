import { useSelector } from "react-redux";
import "./login.css";
import { onSignUp } from "./loginFunc";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const register = useSelector((state) => state.register);
  let navigate = useNavigate();
  const routeChange = () => {
    console.log("into route change");
    let path = `..`;
    navigate(path);
  };
  return (
    <form
      className="signupform"
      onSubmit={async (e) => {
        await onSignUp(e);
      }}
    >
      <div className="userSec inputEle">
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="ex:-harish"></input>
        {!register.emailStatus && (
          <span className="inputErrors">! invalid email</span>
        )}
      </div>
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
      <div className="passdSec inputEle">
        <label for="passwdCheck">Re-Enter Password</label>
        <input type="password" name="passwdCheck"></input>
        {!register.passdMatch && (
          <span className="inputErrors">! password does not match</span>
        )}
      </div>
      <div id="submitSec">
        <input type="submit" value="Login" />
      </div>
      <p id="regLink" onClick={routeChange}>
        click here to login
      </p>
    </form>
  );
};
export default SignUp;
