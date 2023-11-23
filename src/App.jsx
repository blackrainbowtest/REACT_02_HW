import "./App.css";
import Header from "./components/ToDo/Header";
import Body from "./components/ToDo/Body";
import { useState } from "react";

function App() {

  const [toDo, setToDo] = useState([])

  return (
    <div>
      <Header toDo={toDo} setToDo={setToDo}/>
      <Body toDo={toDo} setToDo={setToDo}/>
    </div>
  );
}

export default App;
