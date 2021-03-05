import { JSDOM } from "jsdom";
import fireEvent from "@testing-library/user-event";

const jsdom = new JSDOM("<!DOCTYPE html>");

export { render, screen } from "@testing-library/react";
export { fireEvent as fire };
export { test } from "uvu";
export * as assert from "uvu/assert";

export function setup(): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  global.window = jsdom.window;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  global.document = jsdom.window.document;
  global.navigator = jsdom.window.navigator;
  global.getComputedStyle = jsdom.window.getComputedStyle;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  global.requestAnimationFrame = null;
}

export function reset(): void {
  jsdom.window.document.title = "";
  jsdom.window.document.head.innerHTML = "";
  jsdom.window.document.body.innerHTML = "";
}
