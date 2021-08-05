import React from "react";

import styles from "./Counter.module.css";

export type CounterProps = {
  value?: number;
  step?: number;
  "data-testid"?: string;
};

export const Counter: React.VFC<CounterProps> = ({
  "data-testid": dataTestId = "Counter",
  value = 0,
  step = 1,
}) => {
  const [count, setCount] = React.useState(value);

  const decrement = () => setCount((ps) => (ps -= step));
  const increment = () => setCount((ps) => (ps += step));

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
};
