import { addStyle } from "../../login/loginFunc";
import "./colorpop.css";
const SpacePop = () => {
  return (
    <div className="colorPop">
      <form
        className="colorForm"
        onSubmit={(e) => {
          addStyle(e, "space");
        }}
      >
        <input
          type="text"
          id="prjName"
          name="colorName"
          placeholder="style name"
          required
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label for="colorHex">Space in Px</label>
          <input
            type="number"
            id="radius"
            name="colorHex"
            required
            style={{ width: "50px", height: "40px" }}
          />
        </div>
        <input type="submit" value="Add Space" id="addPrjButton" />
      </form>
    </div>
  );
};
export default SpacePop;
