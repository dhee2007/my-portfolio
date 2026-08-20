function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="foot">

      <p>
        © {year} Dheeptha. Built with React + Vite
      </p>

      <nav className="ft">

        <a
          href="https://github.com/dhee2007"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dheeptha-m-0a00983a3/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </nav>

    </footer>
  );
}

export default Footer;