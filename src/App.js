import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks =[
  {id: 1, content: "Przejść na Reacta", done: false},
  {id: 2, content: "Zjeść obiad", done: true}
];

const hideDoneTasks = false;

function App() {
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
        extraContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </>
  );
}

export default App;
