import React from "react";


  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/Home" className="logo">
            Home
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/hobby">Hobby</a>
            </li>
            <li>
              <a href="/contact">Contacts</a>
            </li>
            <li>
              <a href="/contact">Dark</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`navbar`}>
          {/* logo */}
          <a href='#home' className={`logo`}>Dev. </a>
          <ul className={`navMenu ${isActive ? 'active' : ''}`}>
            <li onClick={removeActive}>
              <a href='#home' className={`home`}>Home</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`projects`}>Projects</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`hobby`}>Hobby</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`contact`}>Contact</a>
            </li>
          </ul>
          <div className={`hamburger ${isActive ? 'active' : ''}`}  onClick={toggleActiveClass}>
            <span className={`bar`}></span>
            <span className={`bar`}></span>
            <span className={`bar`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
;