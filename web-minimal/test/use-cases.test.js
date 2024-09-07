const { describe, it, assert } = require("./test-utils.js");
const { filterRecipes } = require("../src/js/use-cases.js");

function listsAreEqual(listA, listB) {
    return listA.length === listB.length && listA.every((item, index) => item === listB[index]);
}

describe("use-cases", () => {

    describe("filterRecipes", () => {

        const recipes = [
            {
                id: 0,
                name: "Chocolate Cake",
                ingredients: ["chocolate", "flour", "sugar"]
            },
            {
                id: 1,
                name: "Chicken Alfredo",
                ingredients: ["chicken", "pasta", "sauce"]
            },
            {
                id: 2,
                name: "Peanut Butter Cookies",
                ingredients: ["peanut butter", "flour", "sugar"]
            }
        ];

        it("should not filter any recipes when no search term is given", () => {
            [
                undefined,
                null,
                "",
                " ",
                "  ",
            ].forEach(searchTerm =>
                assert(filterRecipes(recipes, searchTerm).length === recipes.length)
            );
        });

        it("should only include results that have the search term in their name or ingredients", () => {

            assert(listsAreEqual(filterRecipes(recipes, "chicken").map(recipe => recipe.id), [1]));
            assert(listsAreEqual(filterRecipes(recipes, "cookie").map(recipe => recipe.id), [2]));
            assert(listsAreEqual(filterRecipes(recipes, "sugar").map(recipe => recipe.id), [0, 2]));

        });

    });

});
