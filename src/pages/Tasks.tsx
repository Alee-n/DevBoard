import { useState, useEffect } from "react";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

type Task = {
    text: string;
    completed: boolean;
};

function Tasks() {

    const [task, setTask] = useState("");

    const [tasks, setTasks] = useState<Task[]>(() => {

        const savedTasks =
            localStorage.getItem("tasks");

        return savedTasks
            ? JSON.parse(savedTasks)
            : [];
    });

    useEffect(() => {

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    }, [tasks]);

    function addTask() {

        if (!task.trim()) {
            return;
        }

        setTasks([
            ...tasks,
            {
                text: task,
                completed: false
            }
        ]);

        setTask("");
    }

    function deleteTask(indexToDelete: number) {

        setTasks(
            tasks.filter(
                (_, index) =>
                    index !== indexToDelete
            )
        );
    }

    function toggleComplete(index: number) {

        const updatedTasks = [...tasks];

        updatedTasks[index].completed =
            !updatedTasks[index].completed;

        setTasks(updatedTasks);
    }

    const completedTasks =
    tasks.filter(
        task => task.completed
    ).length;

    const pendingTasks =
        tasks.length -
        completedTasks;

    return (
        <div>

            <h2>Task Manager</h2>

            <TaskForm
                task={task}
                setTask={setTask}
                addTask={addTask}
            />

            <div>

                <h3>Statistics</h3>

                <p>
                    Total Tasks:
                    {tasks.length}
                </p>

                <p>
                    Completed:
                    {completedTasks}
                </p>

                <p>
                    Pending:
                    {pendingTasks}
                </p>

            </div>

            <h3>
                Tasks ({tasks.length})
            </h3>

            {tasks.length === 0 ? (
                <p>No tasks yet.</p>
            ) : (
                <ul>

                    {tasks.map((item, index) => (

                    <TaskItem
                        key={index}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() =>
                            toggleComplete(index)
                        }
                        onDelete={() =>
                            deleteTask(index)
                        }
                    />

                    ))}

                </ul>
            )}

        </div>
    );
}

export default Tasks;