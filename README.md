[![CircleCI](https://circleci.com/gh/gojob-1337/gatsby-gojob-starter.svg?style=svg)](https://circleci.com/gh/gojob-1337/gatsby-gojob-starter)

# Gojob's Gatsby Starter 🚀

Yet another starter for [Gatsby](https://www.gatsbyjs.org) v2.

## Disclaimer 📜

This is an **opinionated** starter: here at [Gojob](https://twitter.com/GojobT), we ❤️ both TypeScript and Testing.

## What's Inside 📦

- [Gatsby](https://www.gatsbyjs.org) v2
- [TypeScript](https://www.typescriptlang.org/) v3.5
- [Material-UI](https://material-ui.com/) v4
- [Jest](https://jestjs.io) and [react-testing-library](https://github.com/kentcdodds/react-testing-library)
- [Cypress](https://cypress.io) and [cypress-testing-library](https://github.com/kentcdodds/cypress-testing-library)
- CI/CD for both GitLab (`.gitlab-ci.yml`) and CircleCI (`.circleci/config.yml`)

And we rely on `yarn` for managing our packages and starting our scripts 😇.

## How to...

Clone the repository and then, from the root folder of the project:

```bash
yarn install

# check the codebase with `tsc`
yarn tsc:all

# launch both Unit tests and E2E (cypress) tests
yarn test && yarn e2e:ci

# prettify the code
yarn format

# run the code linter (analysis only)
yarn lint

# start the app in dev mode (with watch mode)
yarn start

# build the static project, ready for production
yarn build
```
