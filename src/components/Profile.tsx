function Projects() {

  const projects = [

      {
          name: "FocusFlow",

          status: "Completed",

          description:
              "AI-powered productivity planner with Flask, PostgreSQL, JWT authentication, Docker and CI/CD.",

          tech: [
              "Flask",
              "PostgreSQL",
              "JWT",
              "Docker",
              "Pytest"
          ],

          github:
              "https://github.com/Alee-n/FocusFlow"
      },

      {
          name: "DevBoard",

          status: "In Progress",

          description:
              "Developer learning dashboard built with React and TypeScript.",

          tech: [
              "React",
              "TypeScript",
              "Vite"
          ],

          github:
              "https://github.com/Alee-n/DevBoard"
      }

  ];

  return (

      <div className="page">

          <h1>Projects</h1>

          {projects.map(
              (project, index) => (

                  <div
                      key={index}
                      className="card project-card"
                  >

                      <h2>
                          {project.name}
                      </h2>

                      <p>
                          {project.description}
                      </p>

                      <p>

                          <strong>
                              Status:
                          </strong>

                          {" "}

                          {project.status}

                      </p>

                      <div>

                          {project.tech.map(
                              (
                                  tech,
                                  techIndex
                              ) => (

                                  <span
                                      key={techIndex}
                                      className="badge"
                                  >
                                      {tech}
                                  </span>

                              )
                          )}

                      </div>

                      <br />

                      <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                      >
                          View GitHub
                      </a>

                  </div>

              )
          )}

      </div>

  );
}

export default Projects;