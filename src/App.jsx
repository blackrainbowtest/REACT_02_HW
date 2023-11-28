import "./App.css";
import Header from "./components/ToDo/Header";
import Body from "./components/ToDo/Body";
import Popap from "./components/common/Popap";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState([]);
  const [error, setError] = useState("");

  return (
    <>
      <Header toDo={toDo} setToDo={setToDo} setError={setError} />
      <Body toDo={toDo} setToDo={setToDo} setError={setError} />
      {error.trim() ? <Popap error={error} setError={setError}/> : null}
    </>
  );
}

export default App;
