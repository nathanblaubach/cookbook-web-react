// This is an ad-hoc testing framework that you can use to test your code.
// It is a simple implementation of the describe-it-assert pattern that is common in testing frameworks like Jest/Vitest
// To make running tests simple, end tests with .test.js and create a script to run them all with this command:
// printf "#\!/bin/sh\n\nfind . -type f -name \"*.test.js\" -exec node {} \;\n" > test.sh

/**
 * Describes and executes a group of tests
 * Use this to organize test cases in test files and in the console output
 * @param {string} description The description of the group of tests
 * @param {function} testFunction The function that contains the tests
 */
function describe(description, testFunction) {
    console.log("\x1b[37m", `${getIndentation(true)}${description}`);
    testFunction();
}

/**
 * Describes and executes a test
 * Use this to define test cases that print pass/fail results to the console
 * @param {string} description The description of the test
 * @param {function} testFunction The function that contains the test
 */
function it(description, testFunction) {
    try {
        testFunction();
        console.log("\x1b[32m", `${getIndentation()}${description} - PASSED`);
    } catch (error) {
        console.log("\x1b[31m", `${getIndentation()}${description} - FAILED`);
    }
}

/**
 * Asserts that a condition is true
 * Use this to verify somehting in a test case
 * @param {boolean} condition The condition to test
 */
function assert(condition) {
    if (!condition) {
        throw new Error();
    }
}

function getIndentation(callingFromDescribe = false) {
    const gumberOfDescribesInStackTrace = Error().stack.split("\n").filter(line => line.includes("at describe")).length;
    const numberOfIndents = callingFromDescribe ? gumberOfDescribesInStackTrace - 1 : gumberOfDescribesInStackTrace;
    let padding = "";
    for (let i = 0; i < numberOfIndents; i++) {
        padding += "   ";
    }
    return padding;
}

module.exports = {
    describe,
    it,
    assert
};
