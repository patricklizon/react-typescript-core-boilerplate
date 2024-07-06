// import userEvent from "@testing-library/user-event";
// import { expect, use } from "chai";
// import chaiDom from "chai-dom";

// use(chaiDom);

// export { expect, userEvent };

import { afterEach, chai } from "vitest";
import { cleanup } from "@testing-library/react";
import chaiDom from "chai-dom";
// import matchers from '@testing-library/jest-dom/matchers';

// expect.extend(matchers);
chai.use(chaiDom);

afterEach(() => {
  cleanup();
});
