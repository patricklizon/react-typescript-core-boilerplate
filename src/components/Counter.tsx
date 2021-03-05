import React, { MouseEventHandler, useState, VFC } from "react";

import styles from "./Counter.module.css";

export const Counter: VFC<{ step?: number; "data-testid"?: string }> = ({
  step,
  "data-testid": dataTestId = "Counter",
}) => {
  const [count, setCount] = useState(0);

  const handleClick = (
    action: "increment" | "decrement",
    step = 1
  ): MouseEventHandler => () =>
    setCount((c) => (action === "increment" ? (c += step) : (c -= step)));

  return (
    <div className={styles.root}>
      <button
        className={styles.button}
        data-testid={`${dataTestId}.actions.decrement`}
        onClick={handleClick("decrement", step)}
      >
        -
      </button>
      <strong className={styles.display} data-testid={`${dataTestId}.display`}>
        {count}
      </strong>
      <button
        className={styles.button}
        data-testid={`${dataTestId}.actions.increment`}
        onClick={handleClick("increment", step)}
      >
        +
      </button>
    </div>
  );
};
