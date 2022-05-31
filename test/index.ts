import userEvent from "@testing-library/user-event";
import { expect, use } from "chai";
import chaiDom from "chai-dom";

use(chaiDom);

export { expect, userEvent };
