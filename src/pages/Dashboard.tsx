import StatCard from "../components/StatCard";
import ProgressBar from "../components/ProgressBar";

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

        <div className="page">

            <h1>DevBoard Dashboard</h1>

            <div className="stats-grid">

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

                <div className="card">

                    <h3>Progress</h3>

                    <ProgressBar
                        progress={progress}
                    />

                </div>

            </div>

            <div>

                <h2>Learning Progress</h2>

                <ul
                    style={{
                        listStyle: "none",
                        padding: 0
                    }}
                >

                    {skills.map(
                        (skill, index) => (

                            <li
                                key={index}
                                style={{
                                    marginBottom: "10px"
                                }}
                            >

                                {skill.completed
                                    ? "✅"
                                    : "⬜"}

                                {" "}

                                {skill.name}

                            </li>

                        )
                    )}

                </ul>

            </div>

        </div>

    );
}

export default Dashboard;