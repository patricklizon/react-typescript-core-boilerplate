import React from "react";

import { Counter } from "../../src/components/Counter";
import { setup, reset, render, assert, test, fire } from "../../setup/env";

test.before(setup);
test.before.each(reset);

test("increment after clicking on increment button", () => {
  const c = render(<Counter data-testid="c" />);
  const display = () => c.getByTestId("c.display");
  const incrementBtn = () => c.getByTestId("c.actions.increment");
  const decrementBtn = () => c.getByTestId("c.actions.decrement");

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
  const c = render(<Counter data-testid="c" step={5} />);
  const display = () => c.getByTestId("c.display");
  const incrementBtn = () => c.getByTestId("c.actions.increment");
  const decrementBtn = () => c.getByTestId("c.actions.decrement");

  assert.is(display().textContent, "0");

  fire.click(incrementBtn());

  assert.is(display().textContent, "5");

  fire.click(decrementBtn());

  assert.is(display().textContent, "0");
});

test.run();
