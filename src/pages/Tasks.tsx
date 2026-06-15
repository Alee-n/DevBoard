import { useState, useEffect } from "react";

type Task = {
    id: number;
    text: string;
    category: string;
    priority: string;
    completed: boolean;
};

function Tasks() {

    const [task, setTask] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [search, setSearch] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {

        try {

            const savedTasks =
                localStorage.getItem("tasks");

            if (savedTasks) {

                const parsedTasks =
                    JSON.parse(savedTasks);

                setTasks(parsedTasks);
            }

        } catch (error) {

            console.error(
                "Failed to load tasks",
                error
            );
        }

    }, []);

    useEffect(() => {

        try {

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );

        } catch (error) {

            console.error(
                "Failed to save tasks",
                error
            );
        }

    }, [tasks]);

    function addTask() {

        if (
            !task.trim() ||
            !category.trim()
        ) {
            return;
        }

        const newTask: Task = {

            id: Date.now(),

            text: task,

            category: category,

            priority: priority,

            completed: false
        };

        setTasks(
            [...tasks, newTask]
        );

        setTask("");
        setCategory("");
        setPriority("Medium");
    }

    function deleteTask(id: number) {

        setTasks(

            tasks.filter(
                task =>
                    task.id !== id
            )

        );
    }

    function toggleComplete(id: number) {

        setTasks(

            tasks.map(task =>

                task.id === id

                    ? {
                        ...task,
                        completed:
                            !task.completed
                    }

                    : task

            )

        );
    }

    const completedTasks =
        tasks.filter(
            task => task.completed
        ).length;

    const pendingTasks =
        tasks.length -
        completedTasks;

    const filteredTasks =
        tasks.filter(task =>

            task.text
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )

        );

    return (

        <div className="page">

            <h2>Task Manager</h2>

            <div className="card">

                <h3>Add Task</h3>

                <input
                    type="text"
                    placeholder="Task Name"
                    value={task}
                    onChange={(e) =>
                        setTask(
                            e.target.value
                        )
                    }
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) =>
                        setCategory(
                            e.target.value
                        )
                    }
                />

                <br /><br />

                <select
                    value={priority}
                    onChange={(e) =>
                        setPriority(
                            e.target.value
                        )
                    }
                >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <br /><br />

                <button
                    onClick={addTask}
                >
                    Add Task
                </button>

            </div>

            <div className="card">

                <h3>Statistics</h3>

                <p>
                    Total Tasks: {tasks.length}
                </p>

                <p>
                    Completed: {completedTasks}
                </p>

                <p>
                    Pending: {pendingTasks}
                </p>

            </div>

            <div className="card">

                <h3>Search Tasks</h3>

                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                />

            </div>

            <div className="card">

                <h3>Tasks</h3>

                <ul
                    style={{
                        listStyle: "none",
                        padding: 0
                    }}
                >

                    {filteredTasks.map(
                        (item) => (

                            <li
                                key={item.id}
                                style={{
                                    marginBottom: "10px"
                                }}
                            >

                                <span
                                    style={{
                                        textDecoration:
                                            item.completed
                                                ? "line-through"
                                                : "none"
                                    }}
                                >

                                    <strong>
                                        {item.text}
                                    </strong>

                                    {" | "}

                                    {item.category}

                                    {" | "}

                                    {item.priority}

                                </span>

                                {" "}

                                <button
                                    onClick={() =>
                                        toggleComplete(
                                            item.id
                                        )
                                    }
                                >
                                    ✓
                                </button>

                                {" "}

                                <button
                                    onClick={() =>
                                        deleteTask(
                                            item.id
                                        )
                                    }
                                >
                                    Delete
                                </button>

                            </li>

                        )
                    )}

                </ul>

            </div>

        </div>

    );
}

export default Tasks;