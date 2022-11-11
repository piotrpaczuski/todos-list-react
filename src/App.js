import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "Przejść na Reacta", done: false },
  { id: 2, content: "Zjeść obiad", done: true }
];


function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

  return (
    <>
      <Header
        header={"Lista zadań"}
      />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form />}
      />
      <Section
        title={"Lista zadań"}
        extraContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </>
  );
}

export default App;
