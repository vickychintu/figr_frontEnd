import LeftDrawer from "./components/LeftDrawer";
import TopNav from "./components/TopNav";
import PopUp from "./components/PopUp";
import Project from "./components/Project";
import { useSelector } from "react-redux";
import StylesBox from "./components/StylesBox";
import "./dash.css";

const Dash = () => {
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
    </div>
  );
};
export default Dash;
