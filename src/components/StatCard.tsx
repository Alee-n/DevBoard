type StatCardProps = {
    title: string;
    value: string;
};

function StatCard({
    title,
    value
}: StatCardProps) {

    return (

        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                margin: "10px",
                width: "200px"
            }}
        >

            <h3>{title}</h3>

            <p>{value}</p>

        </div>

    );
}

export default StatCard;