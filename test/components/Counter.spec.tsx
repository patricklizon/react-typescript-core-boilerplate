import React from "react";
import { expect } from "earljs";
import { render } from "@testing-library/react";
import fire from "@testing-library/user-event";

import { Counter } from "../../src/components/Counter";

describe("Counter", () => {
  const c = render(<Counter data-testid="c" />);
  const display = () => c.getByTestId("c.display");

  it("renders", () => {
    expect(display().textContent).toEqual("0");
  });

  it("increments after clicking on increment button", () => {
    const c = render(<Counter data-testid="c" />);
    const display = () => c.getByTestId("c.display");
    const incBtn = () => c.getByTestId("c.actions.increment");

    expect(display().textContent).toEqual("0");

    fire.click(incBtn());

    expect(display().textContent).toEqual("1");

    fire.click(incBtn());

    expect(display().textContent).toEqual("2");
  });
});
