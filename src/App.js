import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword((word) => (word = e.target.value));
  console.log("I run All time when changes.");
  useEffect(() => {
    console.log("I run at once");
  }, []);
  useEffect(() => {
    if (keyword && keyword.length > 5)
      console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' & 'Counter' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        onChange={onChange}
        placeholder="Search Keyword"
        type="text"
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      {/* <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;
