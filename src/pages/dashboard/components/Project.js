import { useDispatch, useSelector } from "react-redux";
import { onAddPrj } from "../../login/loginFunc";
import "./popUp.css";
const Project = () => {
  const project = useSelector((state) => state.dash);
  const dispatch = useDispatch();
  return (
    <div className="projectContainer">
      <form
        onSubmit={(e) => {
          onAddPrj(e);
        }}
        className="projectForm"
      >
        <input
          type="text"
          name="prjName"
          id="prjName"
          placeholder="Project Name"
        ></input>
        <p className="inputErrors">
          {!project.prjNameStatus ? "!project name should contain text" : ""}
        </p>
        <textarea
          name="prjDes"
          id="projectDes"
          placeholder="Project Description"
        ></textarea>
        <p className="inputErrors">
          {!project.prjDesStatus
            ? "!project description cant contain special charaters"
            : ""}
        </p>
        <input type="submit" value="Add Project" id="addPrjButton" />
      </form>
    </div>
  );
};
export default Project;
