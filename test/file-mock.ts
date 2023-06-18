/*
 * Mock for all kinds of files that don't need to be loaded in tests.
 *
 */

require.extensions[".svg"] = noop;

function noop(): void {
  return;
}
