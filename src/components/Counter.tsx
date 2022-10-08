import { useCallback, useState } from "react";

import styles from "./Counter.module.css";

export type CounterProps = {
  value?: number;
  step?: number;
  "data-testid"?: string;
};

export function Counter({
  "data-testid": dataTestId = "Counter",
  value = 0,
  step = 1,
}: CounterProps): JSX.Element {
  const [count, setCount] = useState(value);

  const decrement = useCallback(() => setCount((ps) => ps - step), [step]);
  const increment = useCallback(() => setCount((ps) => ps + step), [step]);

  return (
    <div data-testid={dataTestId} className={styles.root}>
      <button
        onClick={decrement}
        className={styles.button}
        data-testid={`${dataTestId}.decrement`}
      >
        -
      </button>
      <span data-testid={`${dataTestId}.display`} className={styles.display}>
        {count}
      </span>
      <button
        onClick={increment}
        className={styles.button}
        data-testid={`${dataTestId}.increment`}
      >
        +
      </button>
    </div>
  );
}
