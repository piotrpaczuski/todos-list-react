import { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";


function App() {

  const getLocalStorage = () => {
    let tasks = localStorage.getItem("newTask")
    if (tasks) {
      return tasks = JSON.parse(localStorage.getItem("newTask"));
    }
    else {
      return [];
    }
  }

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem("newTask", JSON.stringify(tasks));
  }, [tasks]
  )

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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

  return (
    <>
      <Header
        header={"Lista zadań"}
      />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title={"Lista zadań"}
        extraContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone}
        />}
        body={<Tasks tasks={tasks} hideDone={hideDone} removeTasks={removeTasks} toggleTaskDone={toggleTaskDone} />}
      />
    </>
  );
}

export default App;
