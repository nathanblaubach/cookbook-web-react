# Cookbook (React Web Application)

## Purpose

This cookbook is a simple list of recipes for my mom's family's family cookbook, but I am writing it in a way that (I
hope) is easily reusable. It is being developed using Typescript, React and Vite.

## Design Decisions

- Because this cookbook is a historical cookbook, the recipes are simply stored in a json file.
- Approach dependencies in a way that limits their impact on the application
    - Dependencies are kept to a relative minimum
    - React components are "[Humble](https://martinfowler.com/bliki/HumbleObject.html)" to prevent entangling logic in
      proprietary React code
    - Snyk is used to scan for code and dependency vulnerabilities.
- Development follows TDD/BDD principles where possible
    - Playwright is used for end-to-end testing, focusing on accessibility (axe-core) and a few user flows
    - Vitest is used for unit testing typescript logic and adapters
    - React components are "[Humble](https://martinfowler.com/bliki/HumbleObject.html)" to allow logic to be tested
      elsewhere

## Setup/Run

You will need to have [node.js](https://nodejs.org) and [npm](https://www.npmjs.com) installed.

Then, if you understand them, run the following commands in your terminal:

```sh
# Clone this repository
git clone https://github.com/nathanblaubach/cookbook.git

# Run the web application
cd cookbook/ui
npm i
npm run dev

# Run the unit tests
cd cookbook/ui
npm i
npm run test

# Run the end to end tests (The web application must be running)
cd cookbook/e2e
npm i
npm run install-playwright-browsers # If you haven't installed playwright browsers before
npm run e2e
```

## Contributors

- [Nathan Blaubach](https://github.com/nathanblaubach) - Source Code
- Jeremy Slagle - Logo

## Licenses

- [MIT](https://github.com/nathanblaubach/cookbook/blob/main/LICENSE)
