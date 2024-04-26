import LeftDrawer from "./components/LeftDrawer";
import TopNav from "./components/TopNav";
import PopUp from "./components/PopUp";
import Project from "./components/Project";
import { useSelector } from "react-redux";
import StylesBox from "./components/StylesBox";
import "./dash.css";
import ColorPop from "./components/ColorPop";
import RadiusPop from "./components/RadiusPop";
import SpacePop from "./components/SpacePop";
import { useEffect } from "react";
import useAuth from "../login/useAuth";
import { Button } from "@mui/material";
import ButtonPop from "./components/ButtonPop";

const Dash = () => {
  //   const routeChange = () => {
  //     window.location.href = `/register/`;
  //     console.log("into route change");
  //   };
  //   useEffect(() => {
  //     const accessToken = localStorage.getItem("accessToken");
  //     console.log(accessToken);
  //     if (!accessToken) {
  //       console.log("hi");
  //       //   routeChange();
  //     }
  //   }, []);
  useAuth();
  const component = useSelector((state) => state.component);
  return (
    <div className="DashBaoard">
      <div className="dash">
        <TopNav />
        <div className="dashContent">
          <StylesBox />
        </div>
      </div>
      <LeftDrawer />
      {component.projectPop && <PopUp children={<Project />} />}
      {component.colorPop && <PopUp children={<ColorPop />} />}
      {component.radiusPop && <PopUp children={<RadiusPop />} />}
      {component.spacePop && <PopUp children={<SpacePop />} />}
      {component.buttonPop && <PopUp children={<ButtonPop />} />}
    </div>
  );
};
export default Dash;
