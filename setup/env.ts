import { JSDOM } from "jsdom";

const { window } = new JSDOM("<main></main>");

export { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";

export { fireEvent as fire };

export { test } from "uvu";
export * as assert from "uvu/assert";

export function setup() {
  // @ts-ignore
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;
  global.getComputedStyle = window.getComputedStyle;
  // @ts-ignore
  global.requestAnimationFrame = null;
}

export function reset() {
  window.document.title = "";
  window.document.head.innerHTML = "";
  window.document.body.innerHTML = "<main></main>";
}
