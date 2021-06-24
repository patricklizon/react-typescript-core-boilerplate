// eslint-disable-next-line import/no-default-export
export default {
  files: ["src/**/*spec.{ts,tsx}"],
  extensions: ["ts", "tsx"],
  failFast: true,
  failWithoutAssertions: false,
  require: ["@swc-node/register"],
};
