import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  const byeFn = () => console.log("Destroied :)");
  const hiFn = () => {
    console.log("Created :)");
    return byeFn;
  };
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Showing"}</button>
    </div>
  );
}

export default App;
