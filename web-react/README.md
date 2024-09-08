# Cookbook (React Web Application)

This react service is a standalone cookbook application that retrieves recipes from a simple json file.

- Dependencies are kept to a relative minimum to minimize impact on the application
- The react components are intentionally "[Humble](https://martinfowler.com/bliki/HumbleObject.html)": They don't contain any business logic
- Behavioral tests ensure that the business logic does what is required of it (TDD)

## Environment

- [node.js](https://nodejs.org)
- [npm](https://www.npmjs.com)
- [Vite react-swc-ts](https://vitejs.dev/)

## Setup/Run

You will need to have [node.js](https://nodejs.org) and [npm](https://www.npmjs.com) installed.

Then, if you understand them, run the following commands in your terminal:

```bash
-- Clone this repository
git clone https://github.com/nathanblaubach/cookbook.git

-- Run the web application:
cd cookbook/web-react
npm install
npm run dev
```
