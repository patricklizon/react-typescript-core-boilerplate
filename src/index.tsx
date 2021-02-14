import React from "react";
import ReactDOM from "react-dom";

import "./reset.css";
import "./app.css";
import styles from "./index.module.css";

const App: React.VFC = () => (
  <div className={styles.container}>hello universe!</div>
);

ReactDOM.render(<App />, document.getElementById("app"));
