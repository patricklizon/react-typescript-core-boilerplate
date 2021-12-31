declare module "*.svg" {
  const content: string;
  // eslint-disable-next-line import/no-default-export
  export default content;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default classes;
}
