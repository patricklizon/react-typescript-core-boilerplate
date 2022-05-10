import { expect, userEvent } from "@test";
import { render, screen } from "@testing-library/react";

import { Counter, type CounterProps } from "./Counter";

describe("#" + Counter.name, () => {
  describe("when initialized", () => {
    it("has correct default value", () => {
      render(<Counter />);

      const actual = $display().textContent;
      const expected = "0";

      expect(actual).to.equal(expected);
    });

    it("has correct custom value", () => {
      const initialValue: CounterProps["value"] = 100;
      render(<Counter value={initialValue} />);

      const actual = $display().textContent;
      const expected = initialValue.toString();

      expect(actual).to.equal(expected);
    });
  });

  describe("when pressing increment button", () => {
    it("changes value by default step", async () => {
      const user = userEvent.setup();
      render(<Counter />);

      await user.click($increment());
      await user.click($increment());

      const actual = $display().textContent;
      const expected = "2";

      expect(actual).to.equal(expected);
    });

    it("changes value by custom step", async () => {
      const user = userEvent.setup();
      const step: CounterProps["step"] = 100;
      render(<Counter step={step} />);

      await user.click($increment());

      const actual = $display().textContent;
      const expected = step.toString();

      expect(actual).to.equal(expected);
    });
  });

  describe("when pressing decrement button", () => {
    it("changes value by default step", async () => {
      const user = userEvent.setup();
      render(<Counter />);

      await user.click($decrement());
      await user.click($decrement());

      const actual = $display().textContent;
      const expected = "-2";

      expect(actual).to.equal(expected);
    });

    it("changes value by custom step", async () => {
      const step: CounterProps["step"] = 100;
      const user = userEvent.setup();
      render(<Counter step={step} />);

      await user.click($decrement());

      const actual = $display().textContent;
      const expected = (-step).toString();

      expect(actual).to.equal(expected);
    });
  });
});

function $display(): HTMLElement {
  return screen.getByTestId("Counter.display");
}

function $increment(): HTMLElement {
  return screen.getByTestId("Counter.increment");
}

function $decrement(): HTMLElement {
  return screen.getByTestId("Counter.decrement");
}
