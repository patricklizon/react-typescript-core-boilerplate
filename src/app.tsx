import "./reset.css";
import "./app.css";
import styles from "./app.module.css";
import { Counter } from "./components/Counter";

export function App(): JSX.Element {
  return (
    <div className={styles.layout}>
      <div>hello universe!</div>
      <Counter />
    </div>
  );
}
