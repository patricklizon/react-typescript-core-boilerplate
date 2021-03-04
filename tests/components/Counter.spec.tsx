import React from "react";

import { Counter } from "../../src/components/Counter";
import { setup, reset, render, assert, test, fire } from "../../setup/env";

test.before(setup);
test.before.each(reset);

test("renders", () => {
  const c = render(<Counter data-testid="c" />);
  const display = () => c.getByTestId("c.display");

  assert.is(display().textContent, "0");
});

test("increment after clicking on increment button", () => {
  const c = render(<Counter data-testid="c" />);
  const display = () => c.getByTestId("c.display");
  const incBtn = () => c.getByTestId("c.actions.increment");

  assert.is(display().textContent, "0");

  fire.click(incBtn());

  assert.is(display().textContent, "1");

  fire.click(incBtn());

  assert.is(display().textContent, "2");
});

test.run();
