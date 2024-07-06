# react-core-boilerplate &middot; Simplest SPA

< short description >

## Table of content

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Stack](#stack)
- [Scripts](#scripts)

## Prerequisites

- [Node](https://nodejs.org/en/) - version specified in [.nvmrc](/.nvmrc) file.
- [corepack](https://github.com/nodejs/corepack) - loads package manager defined in project without installing it

_It's recommended to use node version manger (ie. [fnm](https://github.com/Schniz/fnm)), for easier switching between different projects._

## Setup

```sh
# switch to correct node version
fnm use

# Setup correct version of npm using corepack
corepack install
corepack enable

# Copy environmental variables
cp .env.example .env

# Install dependencies
npm ci

# Start dev server
npm start
```

## Stack

### Frontend

- [TypeScript](https://www.typescriptlang.org/) - typed language build on top of JavaScript,
- [React](https://reactjs.org/) - ui library used for development,

### Tools

- [vite](https://vitejs.dev/) - bundler and dev server,
- [eslint](https://eslint.org) - static code analysis,
- [prettier](https://prettier.io) - code formatter

### Testing

- [vitest](https://vitest.dev) - test runner,
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
| `build:perf` | builds app in performance debugging mode |
| `serve` | serves built application        |

### Test

| Script             | Description                                     |
| ------------------ | ----------------------------------------------- |
| `test`             | run unit tests                                  |
| `test:coverage`    | run `test` and generate coverage report |
| `test:watch`       | run `test` in watch mode          |

### Checks

| Script             | Description                                     |
| ------------------ | ----------------------------------------------- |
| `check:types`       | validates TS types                              |
| `check:format`      | validates code formatting                       |
| `check:lint`        | validates linting rules                         |
| `check:imports`     | checks for unimported code                      |

### Fix

| Script       | Description                |
| ------------ | -------------------------- |
| `fix:format` | tries to fix formatting    |
| `fix:lint`   | tries to fix linter issues |
