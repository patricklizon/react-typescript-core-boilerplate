import { type ReactNode, useCallback, useState } from "react";

import styles from "./counter.module.css";

export type CounterProps = {
  value?: number;
  step?: number;
  testId?: string;
};

export function Counter({
  testId = "Counter",
  value = 0,
  step = 1,
}: CounterProps): ReactNode {
  const [count, setCount] = useState(value);

  const decrement = useCallback(() => setCount((ps) => ps - step), [step]);
  const increment = useCallback(() => setCount((ps) => ps + step), [step]);

  return (
    <div data-testid={testId} className={styles.root}>
      <button
        onClick={decrement}
        className={styles.button}
        data-testid={`${testId}.decrement`}
      >
        -
      </button>
      <span data-testid={`${testId}.display`} className={styles.display}>
        {count}
      </span>
      <button
        onClick={increment}
        className={styles.button}
        data-testid={`${testId}.increment`}
      >
        +
      </button>
    </div>
  );
}
