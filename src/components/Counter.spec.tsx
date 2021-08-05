import React from "react";

import { expect, fireEvent, tl } from "../../test";

import { Counter, CounterProps } from "./Counter";

describe("Counter", () => {
  const $increment = "Counter.increment";
  const $decrement = "Counter.decrement";
  const $display = "Counter.display";

  afterEach(tl.cleanup);

  it("has correct initial value", () => {
    const initialValue: CounterProps["value"] = 100;
    const Cmp = tl.render(<Counter value={initialValue} />);
    const actual = Cmp.getByTestId($display).textContent;
    const expected = initialValue.toString();

    expect(actual).to.equal(expected);
  });

  it("increments value", () => {
    const Cmp = tl.render(<Counter />);
    const increment = Cmp.getByTestId($increment);
    const display = Cmp.getByTestId($display);

    fireEvent.click(increment);
    fireEvent.click(increment);

    const actual = display.textContent;
    const expected = "2";

    expect(actual).to.equal(expected);
  });

  it("increments value by custom step", () => {
    const step: CounterProps["step"] = 100;
    const Cmp = tl.render(<Counter step={step} />);
    const increment = Cmp.getByTestId($increment);
    const display = Cmp.getByTestId($display);

    fireEvent.click(increment);

    const actual = display.textContent;
    const expected = step.toString();

    expect(actual).to.equal(expected);
  });

  it("decrements value", () => {
    const Cmp = tl.render(<Counter />);
    const decrement = Cmp.getByTestId($decrement);
    const display = Cmp.getByTestId($display);

    fireEvent.click(decrement);
    fireEvent.click(decrement);

    const actual = display.textContent;
    const expected = "-2";

    expect(actual).to.equal(expected);
  });

  it("decrements value by custom step", () => {
    const step: CounterProps["step"] = 100;
    const Cmp = tl.render(<Counter step={step} />);
    const decrement = Cmp.getByTestId($decrement);
    const display = Cmp.getByTestId($display);

    fireEvent.click(decrement);

    const actual = display.textContent;
    const expected = (-step).toString();

    expect(actual).to.equal(expected);
  });
});
