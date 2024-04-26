import { addStyle } from "../../login/loginFunc";
import "./colorpop.css";
const ColorPop = () => {
  return (
    <div className="colorPop">
      <form
        className="colorForm"
        onSubmit={(e) => {
          addStyle(e, "color");
        }}
      >
        <input
          type="text"
          id="prjName"
          name="colorName"
          placeholder="color name"
          required
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label for="colorHex">Pick a color:</label>
          <input
            type="color"
            id="favcolor"
            name="colorHex"
            required
            style={{ width: "50px", height: "40px" }}
          />
        </div>
        <input type="submit" value="Add Color" id="addPrjButton" />
      </form>
    </div>
  );
};
export default ColorPop;
