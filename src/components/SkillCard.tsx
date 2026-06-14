type SkillCardProps = {
    name: string;
    completed: boolean;
};

function SkillCard({
    name,
    completed
}: SkillCardProps) {

    return (

        <div className="card">

            <h3>{name}</h3>

            <p>
                {completed
                    ? "Completed"
                    : "In Progress"}
            </p>

        </div>

    );
}

export default SkillCard;