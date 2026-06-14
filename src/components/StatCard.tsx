type StatCardProps = {
    title: string;
    value: string;
};

function StatCard({
    title,
    value
}: StatCardProps) {

    return (

        <div className="card">

            <h3>{title}</h3>

            <p>{value}</p>

        </div>

    );
}

export default StatCard;