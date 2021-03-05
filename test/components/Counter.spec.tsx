import React from "react";
import { expect } from "earljs";
import { render } from "@testing-library/react";
import fire from "@testing-library/user-event";

import { Counter } from "../../src/components/Counter";

describe("Counter", () => {
  it("increments after clicking on increment button", () => {
    const c = render(<Counter data-testid="c" />);
    const display = () => c.getByTestId("c.display");
    const incrementBtn = () => c.getByTestId("c.actions.increment");
    const decrementBtn = () => c.getByTestId("c.actions.decrement");

    expect(display().textContent).toEqual("0");

    fire.click(incrementBtn());

    expect(display().textContent).toEqual("1");

    fire.click(incrementBtn());

    expect(display().textContent).toEqual("2");

    fire.click(decrementBtn());

    expect(display().textContent).toEqual("1");

    fire.click(decrementBtn());

    expect(display().textContent).toEqual("0");
  });

  it("increments and decrements with custom step", () => {
    const c = render(<Counter data-testid="c" step={5} />);
    const display = () => c.getByTestId("c.display");
    const incrementBtn = () => c.getByTestId("c.actions.increment");
    const decrementBtn = () => c.getByTestId("c.actions.decrement");

    expect(display().textContent).toEqual("0");

    fire.click(incrementBtn());

    expect(display().textContent).toEqual("5");

    fire.click(decrementBtn());

    expect(display().textContent).toEqual("0");
  });
});
