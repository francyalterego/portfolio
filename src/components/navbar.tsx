import { useState } from "react";

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <nav className={`navbar`}>
      <a href="#home" className={`logo`}>
        <img src={require("../assets/images/logo.svg").default} alt="logo" />
      </a>
      <ul className={`navMenu ${isActive ? "active" : ""}`}>
        <li onClick={removeActive}>
          <a href="#home" className={`home`}>
            Home
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="#projects" className={`projects`}>
            Projects
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="#hobby" className={`hobby`}>
            Hobby
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="#contact" className={`contact`}>
            Contact
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="#dark" className={`dark`}>
            Dark
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
