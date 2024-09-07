const { describe, it, assert } = require("./test-utils.js");
const { getQueryParamOrNull } = require("../src/js/browser-utilities.js");

describe("browser-utilities", () => {

  describe("getQueryParamOrNull", () => {

    it("should return null when there are no query params", () => {
      const cases = [
        { windowLocationSearch: undefined, expectedResult: null },
        { windowLocationSearch: null, expectedResult: null },
        { windowLocationSearch: "", expectedResult: null },
        { windowLocationSearch: "?", expectedResult: null },
      ];

      cases.forEach((testCase) => {
        const result = getQueryParamOrNull(testCase.windowLocationSearch, "recipeId");
        assert(result === testCase.expectedResult);
      });
    });

    it("should return null when the given key is not present", () => {
      const cases = [
        { windowLocationSearch: "?hello", expectedResult: null },
        { windowLocationSearch: "?hello=", expectedResult: null },
        { windowLocationSearch: "?hello=world", expectedResult: null },
      ];

      cases.forEach((testCase) => {
        const result = getQueryParamOrNull(testCase.windowLocationSearch, "recipeId");
        assert(result === testCase.expectedResult);
      });
    });

    it("should return null when the given key is found but has no value", () => {
      const cases = [
        { windowLocationSearch: "?recipeId", expectedResult: null },
        { windowLocationSearch: "?recipeId=", expectedResult: null },
      ];

      cases.forEach((testCase) => {
        const result = getQueryParamOrNull(testCase.windowLocationSearch, "recipeId");
        assert(result === testCase.expectedResult);
      });
    });

    it("should return the value for the param", () => {
      const cases = [
        { windowLocationSearch: "?recipeId=123", expectedResult: "123" },
        { windowLocationSearch: "?recipeId=Hello", expectedResult: "Hello" },
        { windowLocationSearch: "?hello=world&recipeId=123", expectedResult: "123" },
      ];

      cases.forEach((testCase) => {
        const result = getQueryParamOrNull(testCase.windowLocationSearch, "recipeId");
        assert(result === testCase.expectedResult);
      });
    });

  });

});
