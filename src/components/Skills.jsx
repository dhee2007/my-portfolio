function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "C++",
    "Python",
    "SQL"
  ];

  return (
    <section className="skill-section" id="skills">

      <h2>Skills</h2>

      <div className="Skill-box">

        {skills.map((skill) => (
          <div className="skillitem" key={skill}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
