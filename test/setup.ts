import { afterEach, chai } from "vitest";
import { cleanup } from "@testing-library/react";
import chaiDom from "chai-dom";

chai.use(chaiDom);

afterEach(() => {
  cleanup();
});
