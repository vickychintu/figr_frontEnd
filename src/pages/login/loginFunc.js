import prjApi from "../../api/projectApi";
import RegApi from "../../api/registerApi";
import styleApi from "../../api/styleApi";
import { store } from "../../app/store";
import { updateSnakMsg, updateSnakState } from "../../snakBarSlice";
import {
  updateAllpop,
  updateProjectPop,
} from "../dashboard/components/componentSlice";
import {
  prjStateUpdate,
  setAllComp,
  setAllPrj,
  setAllStyle,
  setCurrentPrj,
} from "../dashboard/dashSlice";
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
const addButton = async (e) => {
  try {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) {
      throw new Error("Access token not found");
    }
    const prjId = store.getState().dash.currentPrjId;
    await styleApi.addComponent(accessToken, {
      projectId: prjId,
      colorId: e.target.colors.value,
      spaceId: e.target.space.value,
      radiusId: e.target.radius.value,
      name: e.target.buttonName.value,
      type: "button",
    });
    store.dispatch(updateAllpop(false));
    store.dispatch(updateSnakState(true));
    store.dispatch(updateSnakMsg("Button added"));
    getComponents(prjId);
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
const addStyle = async (e, type) => {
  try {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) {
      throw new Error("Access token not found");
    }
    const prjId = store.getState().dash.currentPrjId;
    await styleApi.addStyle(accessToken, {
      type: type,
      projectId: prjId,
      name: e.target.colorName.value,
      value: e.target.colorHex.value,
    });
    store.dispatch(updateAllpop(false));
    store.dispatch(updateSnakState(true));
    store.dispatch(updateSnakMsg("Style added"));
    getStyles(prjId);
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
const getComponents = async (prjId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) {
      throw new Error("Access token not found");
    }
    // const prjId = store.getState().dash.currentPrjId;
    console.log(prjId);
    const components = await styleApi.getComponentsByProjectId(
      accessToken,
      prjId
    );
    console.log(components);
    // let c = [];
    // let radius = [];
    // let space = [];
    // Styles.map((x) => {
    //   if (x._id == "color") color = x.styles;
    //   if (x._id == "radius") radius = x.styles;
    //   if (x._id == "space") space = x.styles;
    // });
    store.dispatch(setAllComp(components.button));
    console.log(components.button);
    return true;
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
const getStyles = async (prjId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) {
      throw new Error("Access token not found");
    }
    // const prjId = store.getState().dash.currentPrjId;
    console.log(prjId);
    const Styles = await styleApi.getStyles(accessToken, prjId);
    console.log(Styles);
    let color = [];
    let radius = [];
    let space = [];
    Styles.map((x) => {
      if (x._id == "color") color = x.styles;
      if (x._id == "radius") radius = x.styles;
      if (x._id == "space") space = x.styles;
    });
    store.dispatch(setAllStyle({ color, radius, space }));
    return true;
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
    if (projects.length == 1) {
      store.dispatch(setCurrentPrj({ prjNo: 0, prjId: projects[0]._id }));
    }
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
export {
  onLoginSubmit,
  onSignUp,
  onAddPrj,
  getProjects,
  addStyle,
  getStyles,
  addButton,
  getComponents,
};
