

type ProfileProps = {
    name: string;
    goal: string;
};

function Profile({
    name,
    goal
}: ProfileProps) {

    return (

        <div className="card">

            <h2>{name}</h2>

            <p>{goal}</p>

        </div>

    );
}

export default Profile;