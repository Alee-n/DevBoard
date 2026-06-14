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
                "Docker"
            ],
        
            github:
                "https://github.com/Alee-n/FocusFlow"
        },

        {
            name: "DevBoard",
        
            status: "In Progress",
        
            description:
                "Developer productivity dashboard built with React and TypeScript for tracking learning progress and projects.",
        
            tech: [
                "React",
                "TypeScript"
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
                        className="card"
                    >

                        <h2>
                            {project.name}
                        </h2>

                        <p>
                            {project.description}
                        </p>

                        <p>
                            Status:
                            {" "}
                            {project.status}
                        </p>

                        <h4>
                            Tech Stack
                        </h4>

                        <div>

                            {project.tech.map(
                                (tech, techIndex) => (

                                    <span
                                        key={techIndex}
                                        className="badge"
                                    >
                                        {tech}
                                    </span>

                                )
                            )}

                        </div>

                        <p>

                            <a
                                href={
                                    project.github
                                }
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub Repository
                            </a>

                        </p>

                    </div>

                )
            )}

        </div>

    );
}

export default Projects;