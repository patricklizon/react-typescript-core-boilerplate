// Hook for cleaning up DOM after each test in watch mode

const { cleanup } = require("@testing-library/react");

exports.mochaHooks = {
  afterEach() {
    cleanup();
  },
};
