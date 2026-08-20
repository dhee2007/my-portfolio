function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="site-header">
      <nav className="navbar">

        <div className="LOGO">
          DM
        </div>

        <ul className="links">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </nav>
    </header>
  );
}

export default Navbar;