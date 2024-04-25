import prjApi from "../../api/projectApi";
import RegApi from "../../api/registerApi";
import { store } from "../../app/store";
import { updateSnakMsg, updateSnakState } from "../../snakBarSlice";
import { updateProjectPop } from "../dashboard/components/componentSlice";
import { prjStateUpdate, setAllPrj } from "../dashboard/dashSlice";
import { regStateUpdate } from "./registerSlice";

const isEmail = (str) => {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
};
const isValidPassword = (password) => {
  // Regular expressions for checking password criteria
  const hasNumber = /\d/;
  const hasUpper = /[A-Z]/;
  const hasLower = /[a-z]/;

  // Check length and character criteria
  const isLengthValid = password.length >= 7;
  const hasNumberValid = hasNumber.test(password);
  const hasUpperValid = hasUpper.test(password);
  const hasLowerValid = hasLower.test(password);

  // Check if all criteria are met
  return isLengthValid && hasNumberValid && hasUpperValid && hasLowerValid;
};
function isValidName(name) {
  // Regular expression to match only alphabets (case insensitive)
  const regex = /^[a-zA-Z]+$/;

  // Test if the name contains only alphabets
  return regex.test(name);
}
function isValidDes(inputString) {
  // Regular expression to match alphabets, numbers, and optional spaces
  const regex = /^[a-zA-Z0-9\s]+$/;

  // Check if the input string matches the regular expression
  return regex.test(inputString);
}
const passWdMAtches = (passwd1, passwd2) => {
  if (passwd1 === passwd2) {
    return true;
  } else {
    return false;
  }
};
const getProjects = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) {
      throw new Error("Access token not found");
    }
    const projects = await prjApi.getAllProjects(accessToken);
    console.log(projects);
    store.dispatch(setAllPrj(projects));
    return projects[0];
  } catch (error) {
    console.log(error);
    store.dispatch(
      updateSnakMsg(
        error.response ? error.response.data.message : "Server error"
      )
    );
    store.dispatch(updateSnakState(true));
    return false;
  }
};
const onAddPrj = async (e) => {
  e.preventDefault();
  const prjName = e.target.prjName.value;
  const prjDes = e.target.prjDes.value;
  const nameCheck = isValidName(prjName);
  const desCheck = isValidDes(prjDes);
  store.dispatch(
    prjStateUpdate({
      prjNameStatus: nameCheck,
      prjDesStatus: desCheck,
    })
  );
  if (!nameCheck || !desCheck) return false;
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) {
      throw new Error("Access token not found");
    }
    await prjApi.addProject(accessToken, {
      name: prjName,
      description: prjDes,
    });
    await getProjects();
    store.dispatch(updateProjectPop(false));
    store.dispatch(updateSnakMsg("Project created succesfully"));
    store.dispatch(updateSnakState(true));
    return true;
  } catch (error) {
    store.dispatch(
      updateSnakMsg(
        error.response ? error.response.data.message : "Server error"
      )
    );
    store.dispatch(updateSnakState(true));
    return false;
  }
};
const onSignUp = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const name = e.target.name.value;
  const passwdCheck = e.target.passwdCheck.value;
  const passwd = e.target.passwd.value;
  const { validEmail, validPassd, validMatch, validName } = {
    validEmail: isEmail(email),
    validPassd: isValidPassword(passwd),
    validMatch: passWdMAtches(passwd, passwdCheck),
    validName: isValidName(name),
  };
  store.dispatch(
    regStateUpdate({
      emailStatus: validEmail,
      passdStatus: validPassd,
      passdMatch: validMatch,
      name: validName,
    })
  );
  if (!validEmail || !validMatch || !validName || !validPassd) return;
  try {
    // Call the registerUser function from the apiService
    await RegApi.registerUser({ name, email, password: passwd });
    // Handle successful registration
    console.log("User registered successfully");
    store.dispatch(updateSnakMsg("user created succesfully"));
    store.dispatch(updateSnakState(true));
    return true;
  } catch (error) {
    // Handle registration error
    console.error(
      "Error registering user:",
      error.response ? error.response.data.message : error.message
    );
    store.dispatch(
      updateSnakMsg(
        error.response ? error.response.data.message : "Server error"
      )
    );
    store.dispatch(updateSnakState(true));
    return false;
  }
};
const onLoginSubmit = async (e) => {
  e.preventDefault();
  e.preventDefault();
  const email = e.target.email.value;
  const passwd = e.target.passwd.value;
  const { validEmail, validPassd } = {
    validEmail: isEmail(email),
    validPassd: isValidPassword(passwd),
  };
  store.dispatch(
    regStateUpdate({
      emailStatus: validEmail,
      passdStatus: validPassd,
    })
  );
  if (!validEmail || !validPassd) return false;
  try {
    // Call the registerUser function from the apiService
    const userData = await RegApi.loginUser({ email, password: passwd });
    // Handle successful registration
    console.log(userData);
    localStorage.setItem("accessToken", userData.data.accessToken);

    return true;
  } catch (error) {
    // Handle registration error
    console.error(
      "Error registering user:",
      error.response ? error.response.data.message : error.message
    );
    store.dispatch(
      updateSnakMsg(
        error.response ? error.response.data.message : "Server error"
      )
    );
    store.dispatch(updateSnakState(true));
  }
};
export { onLoginSubmit, onSignUp, onAddPrj, getProjects };
