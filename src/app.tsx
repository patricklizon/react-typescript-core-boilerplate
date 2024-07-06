import styles from "@/app.module.css";
import { Counter } from "@/features/counter";

export function App(): JSX.Element {
  return (
    <div className={styles.layout}>
      <div>hello universe!</div>
      <Counter />
    </div>
  );
}
