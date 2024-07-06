import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Counter, type CounterProps } from "./counter";

const testId = "test-id";

const defaultProps = {
  testId,
} satisfies CounterProps;

describe("#" + Counter.name, () => {
  describe("when initialized", () => {
    it("has correct default value", () => {
      render(<Counter {...defaultProps} />);

      const actual = getDisplayElement().textContent;
      const expected = "0";

      expect(actual).to.equal(expected);
    });

    it("has correct custom value", () => {
      const value: CounterProps["value"] = 100;
      render(<Counter {...defaultProps} value={value} />);

      const actual = getDisplayElement().textContent;
      const expected = value.toString();

      expect(actual).to.equal(expected);
    });
  });

  describe("when pressing increment button", () => {
    it("changes value by default step", async () => {
      const user = userEvent.setup();
      render(<Counter {...defaultProps} />);

      await user.click(getIncrementElement());
      await user.click(getIncrementElement());

      const actual = getDisplayElement().textContent;
      const expected = "2";

      expect(actual).to.equal(expected);
    });

    it("changes value by custom step", async () => {
      const user = userEvent.setup();
      const step: CounterProps["step"] = 100;
      render(<Counter {...defaultProps} step={step} />);

      await user.click(getIncrementElement());

      const actual = getDisplayElement().textContent;
      const expected = step.toString();

      expect(actual).to.equal(expected);
    });
  });

  describe("when pressing decrement button", () => {
    it("changes value by default step", async () => {
      const user = userEvent.setup();
      render(<Counter {...defaultProps} />);

      await user.click(getDecrementElement());
      await user.click(getDecrementElement());

      const actual = getDisplayElement().textContent;
      const expected = "-2";

      expect(actual).to.equal(expected);
    });

    it("changes value by custom step", async () => {
      const step: CounterProps["step"] = 100;
      const user = userEvent.setup();
      render(<Counter {...defaultProps} step={step} />);

      await user.click(getDecrementElement());

      const actual = getDisplayElement().textContent;
      const expected = (-step).toString();

      expect(actual).to.equal(expected);
    });
  });
});

function getDisplayElement(): HTMLElement {
  return screen.getByTestId(`${testId}.display`);
}

function getIncrementElement(): HTMLElement {
  return screen.getByTestId(`${testId}.increment`);
}

function getDecrementElement(): HTMLElement {
  return screen.getByTestId(`${testId}.decrement`);
}
