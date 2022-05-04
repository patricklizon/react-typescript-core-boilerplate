import { Counter } from "@components/Counter";

import styles from "./app.module.css";

export function App(): JSX.Element {
  return (
    <div className={styles.layout}>
      <div>hello universe!</div>
      <Counter />
    </div>
  );
}
