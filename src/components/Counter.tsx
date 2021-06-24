import React from "react";

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
    <div data-testid={dataTestId}>
      <button onClick={decrement} data-testid={`${dataTestId}.decrement`}>
        -
      </button>
      <span data-testid={`${dataTestId}.display`}>{count}</span>
      <button onClick={increment} data-testid={`${dataTestId}.increment`}>
        +
      </button>
    </div>
  );
};
