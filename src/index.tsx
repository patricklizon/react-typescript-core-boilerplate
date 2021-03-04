import React from "react";
import ReactDOM from "react-dom";

import "./reset.css";
import "./app.css";
import styles from "./index.module.css";
import { Counter } from "./components/Counter";

const App: React.VFC = () => (
  <div className={styles.container}>
    <div>hello universe!</div>
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
