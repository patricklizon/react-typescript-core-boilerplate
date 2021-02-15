# core-boilerplate &middot; most basic SPA boilerplate

< short description >

## Table of content

- [Resources](#Resources)
- [Stack](#Stack)
- [Prerequisites](#Prerequisites)
- [Setup](#Setup)
- [Scripts](#Scripts)
- [Contributing](#Contributing)
- [Testing](#Testing)
- [Deployment](#Deployment)
- [Known Issues](#Known-Issues)

## Resources

< section description >

## Stack

- [TypeScript](https://www.typescriptlang.org/) - typed language build on top of JavaScript,
- [React](https://reactjs.org/) - ui library used for development,

## Tools

- [webpack](https://webpack.js.org) - bundler
- [swc](https://swc.rs) - javascript / typescript compiler
- [eslint](https://eslint.org) - static code analysis
- [prettier](https://prettier.io) - code formatter
- [husky](https://github.com/typicode/husky) - git hooks
- [css-modules](https://github.com/css-modules/css-modules) - scoped css
- [autoprefixer](https://github.com/postcss/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules

## Prerequisites

- [Node](https://nodejs.org/en/) - version specified in [.node-version](/.node-version) file.
- [npm](https://www.npmjs.com/) - usually comes with node.

_It's recommended to use node version manger (ie. [fnm](https://github.com/Schniz/fnm)), for easier switching between different projects._

## Setup

```sh
# Copy environmental variables
cp .env.example .env

# Install dependencies
npm ci

# Start dev server
npm start
```

## Scripts

Summary of defined npm scripts.

### General

| Script  | Description                    |
| ------- | ------------------------------ |
| `start` | starts application in DEV mode |
| `build` | builds app in PROD mode        |

### Test

| Script        | Description               |
| ------------- | ------------------------- |
| `test:types`  | validates TS types        |
| `test:format` | validates code formatting |
| `test:lint`   | validates linting rules   |

### Fix

| Script       | Description                |
| ------------ | -------------------------- |
| `fix:format` | tries to fix formatting    |
| `fix:lint`   | tries to fix linter issues |

### Other

| Script        | Description                                     |
| ------------- | ----------------------------------------------- |
| `lint:staged` | run `fix:format` and `fix:lint` on staged files |

## Contributing

### For future yourself and other contributors

- When adding `TODO` or `FIXME` comments write why something was done that way and propose solution to the problem,
- If code is not clear enough or you believe it needs extra context don't hesitate to add comment explaining why or mention people involved in the decision,
- "Always leave the code you are editing a little bit better than you found it"

## Known Issues

- Hot reloading is not working
