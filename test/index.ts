import fireEvent from "@testing-library/user-event";
import { expect, use } from "chai";
import chaiDom from "chai-dom";
import chaiSinon from "sinon-chai";

use(chaiDom);
use(chaiSinon);

export { expect, fireEvent };
