import { updateAllpop } from "./componentSlice";
import "./popUp.css";
import { useDispatch } from "react-redux";
const PopUp = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="popUpWindow"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(updateAllpop(false));
      }}
    >
      <div
        className="popUpContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default PopUp;
