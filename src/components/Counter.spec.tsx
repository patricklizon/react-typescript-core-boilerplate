import { expect, fireEvent } from "@test";
import { render } from "@testing-library/react";

import { Counter, CounterProps } from "./Counter";

describe(Counter.name, () => {
  const $increment = "Counter.increment";
  const $decrement = "Counter.decrement";
  const $display = "Counter.display";

  describe("when initialized", () => {
    it("has correct default value", () => {
      const Cmp = render(<Counter />);
      const actual = Cmp.getByTestId($display).textContent;
      const expected = "0";

      expect(actual).to.equal(expected);
    });

    it("has correct custom value", () => {
      const initialValue: CounterProps["value"] = 100;
      const Cmp = render(<Counter value={initialValue} />);
      const actual = Cmp.getByTestId($display).textContent;
      const expected = initialValue.toString();

      expect(actual).to.equal(expected);
    });
  });

  describe("when pressing increment button", () => {
    it("changes value by default step", () => {
      const Cmp = render(<Counter />);
      const increment = Cmp.getByTestId($increment);
      const display = Cmp.getByTestId($display);

      fireEvent.click(increment);
      fireEvent.click(increment);

      const actual = display.textContent;
      const expected = "2";

      expect(actual).to.equal(expected);
    });

    it("changes value by custom step", () => {
      const step: CounterProps["step"] = 100;
      const Cmp = render(<Counter step={step} />);
      const increment = Cmp.getByTestId($increment);
      const display = Cmp.getByTestId($display);

      fireEvent.click(increment);

      const actual = display.textContent;
      const expected = step.toString();

      expect(actual).to.equal(expected);
    });
  });

  describe("when pressing decrement button", () => {
    it("changes value by default step", () => {
      const Cmp = render(<Counter />);
      const decrement = Cmp.getByTestId($decrement);
      const display = Cmp.getByTestId($display);

      fireEvent.click(decrement);
      fireEvent.click(decrement);

      const actual = display.textContent;
      const expected = "-2";

      expect(actual).to.equal(expected);
    });

    it("changes value by custom step", () => {
      const step: CounterProps["step"] = 100;
      const Cmp = render(<Counter step={step} />);
      const decrement = Cmp.getByTestId($decrement);
      const display = Cmp.getByTestId($display);

      fireEvent.click(decrement);

      const actual = display.textContent;
      const expected = (-step).toString();

      expect(actual).to.equal(expected);
    });
  });
});
