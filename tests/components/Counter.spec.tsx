import React from "react";

import { Counter } from "../../src/components/Counter";
import { cleanup, render, assert, test, fire, screen } from "../../setup/env";

const display = () => screen.getByTestId("c.display");
const incrementBtn = () => screen.getByTestId("c.actions.increment");
const decrementBtn = () => screen.getByTestId("c.actions.decrement");

test.after.each(cleanup);

test("increment after clicking on increment button", () => {
  render(<Counter data-testid="c" />);

  assert.is(display().textContent, "0");

  fire.click(incrementBtn());

  assert.is(display().textContent, "1");

  fire.click(incrementBtn());

  assert.is(display().textContent, "2");

  fire.click(decrementBtn());

  assert.is(display().textContent, "1");

  fire.click(decrementBtn());

  assert.is(display().textContent, "0");
});

test("increments and decrements with custom step", () => {
  render(<Counter data-testid="c" step={5} />);

  assert.is(display().textContent, "0");

  fire.click(incrementBtn());

  assert.is(display().textContent, "5");

  fire.click(decrementBtn());

  assert.is(display().textContent, "0");
});

test.run();
