function Projects() {

  const projects = [
    {
      title: "Tripper App",
      description: "Enjoy your holiday",
      image:
        "https://imgs.search.brave.com/FZ285KntTAkb_gWPKCb3Woz5lVR6lU1P_sS1SYrzrOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYXNo/Ym9hcmQuZW5saXZl/dHJpcHMuY29tL3N0/b3JhZ2UvdHJpcC10/aHVtYm5haWwvMDFL/TlBTOVEzQVFIWTZU/R01KQlZaVlI2RUIu/anBn",
      tags: ["React", "API"],
      demo: "Live Booking",
    },

    {
      title: "Weather App",
      description: "Real time weather report",
      image:
        "https://imgs.search.brave.com/r08EwB9E-bIyGns2JaZ3cti142gv7uN4vEDN73APGL4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzQwLzA2Lzk5/LzM2MF9GXzQ0MDA2/OTkzN19kR2hsVDRN/WGNVU0c3SmNVUFZG/YlMwcXIwM2swRWJW/aS5qcGc",
      tags: ["React", "API"],
      demo: "Live Demo",
    },

    {
      title: "Math Visualizer",
      description: "Real time learning",
      image:
        "visualizer.jpeg",
      tags: ["React", "API"],
      demo: "Live Learning",
    },
  ];

  return (
    <section className="project-section" id="projects">

      <h2>My Projects</h2>

      <div className="Project-grid">

        {projects.map((project) => (

          <article className="Project-card" key={project.title}>

            <img
              src={project.image}
              alt={project.title}
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tag">

              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}

            </div>

            <a href="#" className="app">
              {project.demo}
            </a>

            <a href="#" className="app">
              GitHub
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;
