import React from "react";

import { render, fire, expect, screen } from "../../test-config/env";
import { Counter } from "../../src/components/Counter";

const display = () => screen.getByTestId("c.display");
const incrementBtn = () => screen.getByTestId("c.actions.increment");
const decrementBtn = () => screen.getByTestId("c.actions.decrement");

describe("Counter", () => {
  it("increments after clicking on increment button", () => {
    render(<Counter data-testid="c" />);

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
    render(<Counter data-testid="c" step={5} />);

    expect(display().textContent).toEqual("0");

    fire.click(incrementBtn());

    expect(display().textContent).toEqual("5");

    fire.click(decrementBtn());

    expect(display().textContent).toEqual("0");
  });
});
