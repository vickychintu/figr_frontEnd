import { useDispatch, useSelector } from "react-redux";
import "./leftDraw.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { updateDrawerState, updateProjectPop } from "./componentSlice";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import { getComponents, getProjects, getStyles } from "../../login/loginFunc";
import { setCurrentPrj } from "../dashSlice";
const LeftDrawer = () => {
  useEffect(() => {
    setPrjonce();
  }, []);
  const setPrjonce = async () => {
    const prj1 = await getProjects();
    const prj2 = await getStyles(prj1 && prj1._id);
    console.log(prj1);
    if (prj1) setPrj(prj1._id, 0);
  };
  const component = useSelector((state) => state.component);
  const dispatch = useDispatch();
  const dash = useSelector((state) => state.dash);
  const setPrj = (id, no) => {
    dispatch(setCurrentPrj({ prjNo: no, prjId: id }));
    getStyles(id);
    getComponents(id);
  };
  return (
    <div
      className="leftDrawer"
      style={{ visibility: component.drawerVis ? "visible" : "hidden" }}
    >
      <div id="drawHeader">
        <div>Projects</div>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 0 }}
          onClick={() => {
            dispatch(updateDrawerState(false));
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      <div id="drawBody">
        {dash.allPrj.map((x, i) => (
          <div
            className={
              dash.currentPrjNo == i ? "projectBox currentPrj" : "projectBox"
            }
            onClick={() => {
              setPrj(x._id, i);
            }}
          >
            {" "}
            {x.name}
          </div>
        ))}
      </div>
      <div
        id="drawFooter"
        onClick={() => {
          dispatch(updateProjectPop(true));
        }}
      >
        Add Project
      </div>
    </div>
  );
};

export default LeftDrawer;
