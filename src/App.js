import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import {useTasks} from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    removeTasks,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <>
      <Header
        header={"Lista zadań"}
      />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form addNewTask={addNewTask}/>}
      />
      <Section
        title={"Lista zadań"}
        extraContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTasks={removeTasks}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </>
  );
}

export default App;
