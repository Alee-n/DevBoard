type TaskItemProps = {
    text: string;
    completed: boolean;
    onDelete: () => void;
    onToggle: () => void;
};

function TaskItem({
    text,
    completed,
    onDelete,
    onToggle
}: TaskItemProps) {

    return (

        <li>

            <span
                style={{
                    textDecoration:
                        completed
                            ? "line-through"
                            : "none"
                }}
            >
                {text}
            </span>

            <button
                onClick={onToggle}
            >
                ✓
            </button>

            <button
                onClick={onDelete}
            >
                Delete
            </button>

        </li>

    );
}

export default TaskItem;