# core-boilerplate &middot; most basic SPA boilerplate

< short description >

## Table of content

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Resources](#resources)
- [Stack](#stack)
- [Scripts](#scripts)

## Prerequisites

- [Node](https://nodejs.org/en/) - version specified in [.nvmrc](/.nvmrc) file.
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

## Resources

< section description >

## Stack

### Frontend

- [TypeScript](https://www.typescriptlang.org/) - typed language build on top of JavaScript,
- [React](https://reactjs.org/) - ui library used for development,
- [CSS modules](https://github.com/css-modules/css-modules) - scoped css

### Tools

- [webpack](https://webpack.js.org) - bundler
- [swc](https://swc.rs) - javascript / typescript compiler
- [eslint](https://eslint.org) - static code analysis
- [prettier](https://prettier.io) - code formatter
- [autoprefixer](https://github.com/postcss/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules

### Testing

- [jest](https://jestjs.io/) - test runner
- [chai](https://github.com/chaijs/chai) - assertion library
- [testing-library](https://testing-library.com/docs/react-testing-library/intro) - testing utilities
- [user-event](https://testing-library.com/docs/ecosystem-user-event/) - more advanced simulation of browser interactions

## Scripts

Summary of npm scripts.

### General

| Script  | Description                    |
| ------- | ------------------------------ |
| `start` | starts application in DEV mode |
| `build` | builds app in PROD mode        |
| `build:perf` | builds app in react performance debugging mode |
| `serve` | serves build application        |

### Test

| Script             | Description                                     |
| ------------------ | ----------------------------------------------- |
| `test`             | run unit tests                                  |
| `test:coverage`    | run `test` in watch mode                        |
| `test:watch`       | run `test` and generate coverage report         |

### Checks

| Script             | Description                                     |
| ------------------ | ----------------------------------------------- |
| `check:types`       | validates TS types                              |
| `check:format`      | validates code formatting                       |
| `check:lint`        | validates linting rules                         |
| `check:lint-staged` | run `fix:format` and `fix:lint` on staged files |
| `check:imports`     | checks for unimported code                      |

### Fix

| Script       | Description                |
| ------------ | -------------------------- |
| `fix:format` | tries to fix formatting    |
| `fix:lint`   | tries to fix linter issues |
