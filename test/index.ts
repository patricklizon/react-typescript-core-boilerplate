import fireEvent from "@testing-library/user-event";
import { expect, use } from "chai";
import chaiDom from "chai-dom";
import sinon from "sinon";
import chaiSinon from "sinon-chai";
export * as tl from "@testing-library/react";

use(chaiDom);
use(chaiSinon);

export { expect, fireEvent, sinon };
