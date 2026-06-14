import StatCard from "../components/StatCard";

function Dashboard() {

  const skills = [
    {
        name: "React",
        completed: true
    },
    {
        name: "TypeScript",
        completed: true
    },
    {
        name: "AWS",
        completed: false
    },
    {
        name: "Open Source",
        completed: true
    },
    {
        name: "HENNGE 2026",
        completed: false
    }
  ];
  
  const completedSkills =
  skills.filter(
      skill => skill.completed
  ).length;

  const progress =
    Math.round(
      (completedSkills / skills.length) * 100
    );

    return (

        <div
            style={{
                padding: "20px"
            }}
        >

            <h1>DevBoard Dashboard</h1>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >

                <StatCard
                    title="Current Goal"
                    value="HENNGE Internship"
                />

                <StatCard
                    title="Learning"
                    value="React + TypeScript"
                />

                <StatCard
                    title="AWS"
                    value="In Progress"
                />

                <StatCard
                    title="Open Source"
                    value="Daily Contributions"
                />
                
                <StatCard
                  title="Progress"
                  value={`${progress}%`}
                />

            </div>

            <div
                style={{
                    marginTop: "30px"
                }}
            >

                <h2>Learning Progress</h2>

                <ul>

                    {skills.map((skill, index) => (

                    <li key={index}>

                      {skill.completed
                        ? "✅"
                        : "⬜"}

                      {" "}

                      {skill.name}

                    </li>

                    ))}

                </ul>

            </div>

        </div>

    );
}

export default Dashboard;