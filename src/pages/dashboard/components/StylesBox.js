import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import {
  updateButton,
  updateColor,
  updateRadius,
  updateSpace,
} from "./componentSlice";
import { useEffect } from "react";
import { getStyles } from "../../login/loginFunc";
const StylesBox = () => {
  useEffect(() => {}, []);
  const dispatch = useDispatch();
  const dash = useSelector((state) => state.dash);
  return (
    <div className="stylesContainer">
      <div id="colorBox" className="stylesBox">
        <div className="styleHeader">Colors</div>
        <div className="styleBody">
          {dash.allColor.map((x, i) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "2px solid black",
                }}
              >
                <div style={{ fontWeight: "bolder" }}>{x.name}</div>
                <input
                  type="color"
                  id="favcolor"
                  name="colorHex"
                  required
                  style={{ width: "30px", height: "30px", border: "0px" }}
                  value={x.value}
                />
              </div>
            );
          })}
        </div>
        <div
          className="styleFooter"
          onClick={() => {
            dispatch(updateColor(true));
          }}
        >
          Add Color
        </div>
      </div>
      <div id="radiusBox" className="stylesBox">
        <div className="styleHeader">Radius</div>
        <div className="styleBody">
          {dash.allRadius.map((x, i) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "2px solid black",
                }}
              >
                <div style={{ fontWeight: "bolder" }}>{x.name}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                  }}
                >
                  <input
                    type="tel"
                    id="favcolor"
                    name="colorHex"
                    required
                    style={{
                      width: "15px",
                      height: "30px",
                      border: "0px",
                      padding: "0",
                      outline: "0",
                    }}
                    value={x.value}
                  />
                  <div>px</div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="styleFooter"
          onClick={() => {
            dispatch(updateRadius(true));
          }}
        >
          Add Radius
        </div>
      </div>
      <div id="spacingBox" className="stylesBox">
        <div className="styleHeader">Spacing</div>
        <div className="styleBody">
          {dash.allSpace.map((x, i) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "2px solid black",
                }}
              >
                <div style={{ fontWeight: "bolder" }}>{x.name}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                  }}
                >
                  <input
                    type="tel"
                    id="favcolor"
                    name="colorHex"
                    required
                    style={{
                      width: "15px",
                      height: "30px",
                      border: "0px",
                      padding: "0",
                      outline: "0",
                    }}
                    value={x.value}
                  />
                  <div>px</div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="styleFooter"
          onClick={() => {
            dispatch(updateSpace(true));
          }}
        >
          Add Spacing
        </div>
      </div>
      {/* button component */}
      <div id="bottonBox" className="stylesBox">
        <div className="styleHeader">Button</div>
        <div className="styleBody">
          {dash.allButtons?.map((x, i) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "2px solid black",
                  height: "50px",
                }}
              >
                <button
                  style={{
                    backgroundColor: x.colorValue,
                    borderRadius: x.radiusValue,
                    padding: x.spaceValue,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {x.name}
                </button>
              </div>
            );
          })}
        </div>
        <div
          className="styleFooter"
          onClick={() => {
            console.log(dash.allColor);
            dispatch(updateButton(true));
          }}
        >
          Add Button
        </div>
      </div>
    </div>
  );
};
export default StylesBox;
