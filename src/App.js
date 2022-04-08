import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChangeToDo = (e) => {
    setToDo(e.target.value);
  };
  const onSubmitToDo = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    console.log(toDos);
  };

  return (
    <div>
      <h1>Your To Do List First! ({toDos.length})</h1>
      <form onSubmit={onSubmitToDo}>
        <input
          onChange={onChangeToDo}
          value={toDo}
          type="text"
          placeholder="Input your to do"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>Your Completed List First!</div>
    </div>
  );
}

export default App;
