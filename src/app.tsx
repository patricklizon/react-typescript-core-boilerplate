/* @refresh reset */

import React from "react";

import "./reset.css";
import "./app.css";
import styles from "./app.module.css";

export const App: React.VFC = () => {
  const [count, setCount] = React.useState(0);

  const decrement = () => setCount((ps) => (ps -= 1));
  const increment = () => setCount((ps) => (ps += 1));

  return (
    <div className={styles.container}>
      <div>hello universe!</div>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
