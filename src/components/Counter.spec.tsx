import "global-jsdom/register";

import React from "react";
import test from "ava";

import { fire, tl } from "../../test";

import { Counter, CounterProps } from "./Counter";

const $increment = "Counter.increment";
const $decrement = "Counter.decrement";
const $display = "Counter.display";

test("Counter has correct initial value", (t) => {
  const initialValue: CounterProps["value"] = 100;
  const Cmp = tl.render(<Counter value={initialValue} />);
  const given = Cmp.getByTestId($display).textContent;
  const expected = initialValue.toString();

  t.is(given, expected);
  tl.cleanup();
});

test("Counter increments value", (t) => {
  const Cmp = tl.render(<Counter />);
  const increment = Cmp.getByTestId($increment);
  const display = Cmp.getByTestId($display);

  fire.click(increment);
  fire.click(increment);

  const given = display.textContent;
  const expected = "2";

  t.is(given, expected);
  tl.cleanup();
});

test("Counter increments value by custom step", (t) => {
  const step: CounterProps["step"] = 100;
  const Cmp = tl.render(<Counter step={step} />);
  const increment = Cmp.getByTestId($increment);
  const display = Cmp.getByTestId($display);

  fire.click(increment);

  const given = display.textContent;
  const expected = step.toString();

  t.is(given, expected);
  tl.cleanup();
});

test("Counter decrements value", (t) => {
  const Cmp = tl.render(<Counter />);
  const decrement = Cmp.getByTestId($decrement);
  const display = Cmp.getByTestId($display);

  fire.click(decrement);
  fire.click(decrement);

  const given = display.textContent;
  const expected = "-2";

  t.is(given, expected);
  tl.cleanup();
});

test("Counter decrements value by custom step", (t) => {
  const step: CounterProps["step"] = 100;
  const Cmp = tl.render(<Counter step={step} />);
  const decrement = Cmp.getByTestId($decrement);
  const display = Cmp.getByTestId($display);

  fire.click(decrement);

  const given = display.textContent;
  const expected = (-step).toString();

  t.is(given, expected);
  tl.cleanup();
});
