import { useState, useEffect } from "react";

type Task = {
    text: string;
    category: string;
    priority: string;
    completed: boolean;
};

function Tasks() {

    const [task, setTask] =
        useState("");

    const [category, setCategory] =
        useState("");
    
    const [priority, setPriority] =
        useState("Medium");

    const [search, setSearch] =
        useState("");

    const [tasks, setTasks] =
        useState<Task[]>([]);

    useEffect(() => {

        const savedTasks =
            localStorage.getItem("tasks");

        if (savedTasks) {

            setTasks(
                JSON.parse(savedTasks)
            );
        }

    }, []);

    useEffect(() => {

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    }, [tasks]);

    function addTask() {

        if (
            !task.trim() ||
            !category.trim()
        ) {
            return;
        }

        setTasks([
            ...tasks,
            {
                text: task,
                category: category,
                priority: priority,
                completed: false
            }
        ]);

        setTask("");
        setCategory("");
    }

    function deleteTask(indexToDelete: number) {

        const updatedTasks =
            tasks.filter(
                (_, index) =>
                    index !== indexToDelete
            );

        setTasks(updatedTasks);
    }

    function toggleComplete(index: number) {

        const updatedTasks =
            [...tasks];

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

                <br />
                <br />

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

                <select
                    value={priority}
                    onChange={(e) =>
                        setPriority(e.target.value)
                    }
                    >
                    <option>
                        High
                    </option>

                    <option>
                        Medium
                    </option>

                    <option>
                        Low
                    </option>

                </select>

                <br />
                <br />

                <button
                    onClick={addTask}
                >
                    Add Task
                </button>

            </div>

            <div className="card">

                <h3>Statistics</h3>

                <p>
                    Total Tasks:
                    {" "}
                    {tasks.length}
                </p>

                <p>
                    Completed:
                    {" "}
                    {completedTasks}
                </p>

                <p>
                    Pending:
                    {" "}
                    {pendingTasks}
                </p>

            </div>

            <div className="card">

                <h3>Search</h3>

                <input
                    type="text"
                    placeholder="Search Tasks"
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

                <ul>

                    {filteredTasks.map(
                        (
                            item,
                            index
                        ) => (

                            <li
                                key={index}
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
                                            index
                                        )
                                    }
                                >
                                    ✓
                                </button>

                                {" "}

                                <button
                                    onClick={() =>
                                        deleteTask(
                                            index
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