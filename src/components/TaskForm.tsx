type TaskFormProps = {
    task: string;
    setTask: (value: string) => void;
    addTask: () => void;
};

function TaskForm({
    task,
    setTask,
    addTask
}: TaskFormProps) {

    return (
        <div>

            <input
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) =>
                    setTask(e.target.value)
                }
            />

            <button
                onClick={addTask}
            >
                Add Task
            </button>

        </div>
    );
}

export default TaskForm;