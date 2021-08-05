import React from "react";

import "./reset.css";
import "./app.css";
import styles from "./app.module.css";
import { Counter } from "./components/Counter";

export const App: React.VFC = () => {
  return (
    <div className={styles.container}>
      <div>hello universe!</div>
      <Counter />
    </div>
  );
};
