import { useState } from "react";
import { addButton, addStyle } from "../../login/loginFunc";
import "./buttonpop.css";
import { useSelector } from "react-redux";
const ButtonPop = () => {
  const dash = useSelector((state) => state.dash);
  const [color, setColor] = useState(dash.allColor[0]?.value);
  const [name, setName] = useState("");
  const [padding, setPadding] = useState(dash.allSpace[0]?.value + "px");
  const [borderRadius, setBorderRadius] = useState(
    dash.allRadius[0]?.value + "px"
  );
  return (
    <div className="buttonPop">
      <form
        className="buttonForm"
        onSubmit={(e) => {
          addButton(e);
        }}
      >
        <input
          type="text"
          id="prjName"
          name="buttonName"
          placeholder="Button name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label for="colors">Choose a color</label>
          <select
            name="colors"
            id="colors"
            placeholder="choose a color"
            required
          >
            {dash.allColor.map((x, i) => {
              return (
                <option
                  value={x._id}
                  onClick={() => {
                    setColor(x.value);
                  }}
                >
                  {x.name}
                </option>
              );
            })}
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label for="radius">Choose a Radius</label>
          <select
            name="radius"
            id="radius"
            placeholder="choose a radius"
            required
          >
            {dash.allRadius.map((x, i) => {
              return (
                <option
                  value={x._id}
                  onClick={() => {
                    console.log(x.value);
                    setBorderRadius(x.value + "px");
                  }}
                >
                  {x.name}
                </option>
              );
            })}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <label for="radius">Choose a Padding</label>
          <select name="space" id="space" placeholder="choose a space" required>
            {dash.allSpace.map((x, i) => {
              return (
                <option
                  value={x._id}
                  onClick={() => {
                    console.log(x.value);
                    setPadding(x.value + "px");
                  }}
                >
                  {x.name}
                </option>
              );
            })}
          </select>
        </div>
        <input type="submit" value="Add Button" id="addPrjButton" />
      </form>
      <div className="buttonPreview">
        <div style={{ marginBottom: "10px" }}>Preview</div>
        <button
          id="cutomBut"
          style={{
            padding: padding,
            backgroundColor: color,
            borderRadius: borderRadius,
          }}
        >
          {name}
        </button>
      </div>
    </div>
  );
};
export default ButtonPop;
