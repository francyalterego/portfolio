import { useState } from "react";

function AccessibilityWidget() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accessibilityButtonContainer">
      <button className="accessibilityButton" onClick={toggleActiveClass}>
        <img
          src={
            require("../assets/images/accessibility/accessibility.svg").default
          }
          alt="logo"
        />
      </button>
    </div>
  );
}
export default AccessibilityWidget;
