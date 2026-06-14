import ProgressBar from "../components/ProgressBar";

function Learning() {

    const skills = [

        {
            name: "React",
            progress: 80
        },

        {
            name: "TypeScript",
            progress: 70
        },

        {
            name: "AWS",
            progress: 30
        },

        {
            name: "Docker",
            progress: 60
        },

        {
            name: "Open Source",
            progress: 65
        }

    ];

    return (

        <div className="page">

            <h1>Learning Tracker</h1>

            {skills.map(
                (skill, index) => (

                    <div
                        key={index}
                        className="card"
                    >

                        <h3>
                            {skill.name}
                        </h3>

                        <ProgressBar
                            progress={
                                skill.progress
                            }
                        />

                    </div>

                )
            )}

        </div>
    );
}

export default Learning;