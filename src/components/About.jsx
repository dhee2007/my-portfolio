function About() {
  return (
    <section className="About-section" id="about">

      <h2>About Me</h2>

      <div className="about-content">

        <figure className="Personal-figure">

          <img
            height="300"
            width="200"
            src="/profile.jpeg"
            alt="Dheeptha"
          />

          <figcaption className="caption">
            Dheeptha | Web Developer
          </figcaption>

        </figure>

      </div>

      <div className="about-text">
        <p>Passionate Web Developer</p>

        <p>
          I am a B.Tech student at Ramaiah University
          with an interest in software development,
          web development and technology.
        </p>
      </div>

    </section>
  );
}

export default About;