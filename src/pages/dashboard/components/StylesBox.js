import "./styles.css";
const StylesBox = () => {
  return (
    <div className="stylesContainer">
      <div id="colorBox" className="stylesBox">
        <div className="styleHeader">Colors</div>
        <div className="styleBody"></div>
        <div className="styleFooter">Add Color</div>
      </div>
      <div id="radiusBox" className="stylesBox">
        <div className="styleHeader">Radius</div>
        <div className="styleBody"></div>
        <div className="styleFooter">Add Radius</div>
      </div>
      <div id="spacingBox" className="stylesBox">
        <div className="styleHeader">Spacing</div>
        <div className="styleBody"></div>
        <div className="styleFooter">Add Spacing</div>
      </div>
    </div>
  );
};
export default StylesBox;
