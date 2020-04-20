# Cookbook

## Purpose

This cookbook is a simple list of recipes. I am writing the application for my mom's family's family cookbook, but I am writing it in a way that (I hope) is easily reusable.

This repository contains two applications that make up the cookbook:

* A web application written in JavaScript using React.js
* An API written in Kotlin using Ktor (Barely started)

The recipes seen when the application is launched are currently being pulled from a JSON file in the web application. When the API is release-ready, the JSON file will be removed.

## Setup

For the web application, you will need to have [node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed. For the api, you will need a JDK (such as [AdoptOpenJDK](https://adoptopenjdk.net/)) and [Gradle](https://gradle.org/)

Then, if you understand them, run the following commands in your terminal:

```bash
-- Clone this repository
git clone https://github.com/nathanblaubach/cookbook.git

-- To run the web application:
cd cookbook/web
npm install
npm start

-- To run the api:
cd cookbook/api
gradle run
```

## Technologies

* [React](https://reactjs.org/) UI library
* [Ktor](https://ktor.io/) Kotlin application framework
* [Exposed](https://github.com/JetBrains/Exposed/wiki) Kotlin SQL library

## Contributors

* [Nathan Blaubach](https://github.com/nathanblaubach) - Source Code
* Jeremy Slagle - Logo

## License

[MIT](https://github.com/nathanblaubach/cookbook-web/blob/master/LICENSE)


