import { useEffect, useState } from "react";

export const useTasks = () => {
    const getLocalStorage = () => JSON.parse(localStorage.getItem("newTask")) || [];

    const [tasks, setTasks] = useState(getLocalStorage);

    useEffect(() => {
        localStorage.setItem("newTask", JSON.stringify(tasks));
    }, [tasks]);

    const removeTasks = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            }

            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    }

    const addNewTask = (newTaskConten) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskConten,
                done: tasks.done,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            }])
    }

    addNewTask()
    removeTasks()
    setAllDone()
    toggleTaskDone()
};