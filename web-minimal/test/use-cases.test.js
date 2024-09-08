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
                category: "Dessert",
                ingredients: ["chocolate", "flour", "sugar"]
            },
            {
                id: 1,
                name: "Chicken Alfredo",
                category: "Main Course",
                ingredients: ["chicken", "pasta", "sauce"]
            },
            {
                id: 2,
                name: "Peanut Butter Cookies",
                category: "Dessert",
                ingredients: ["peanut butter", "flour", "sugar"]
            }
        ];

        it("should not filter any recipes when neither search term nor selected categories are given", () => {
            [
                { searchTerm: undefined, selectedCategories: undefined },
                { searchTerm: null, selectedCategories: undefined },
                { searchTerm: "", selectedCategories: undefined },
                { searchTerm: " ", selectedCategories: undefined },
                { searchTerm: "  ", selectedCategories: undefined },
                { searchTerm: undefined, selectedCategories: null },
                { searchTerm: null, selectedCategories: null },
                { searchTerm: "", selectedCategories: null },
                { searchTerm: " ", selectedCategories: null },
                { searchTerm: "  ", selectedCategories: null },
                { searchTerm: undefined, selectedCategories: [] },
                { searchTerm: null, selectedCategories: [] },
                { searchTerm: "", selectedCategories: [] },
                { searchTerm: " ", selectedCategories: [] },
                { searchTerm: "  ", selectedCategories: [] },
            ].forEach(({ searchTerm, selectedCategories }) => {
                assert(filterRecipes(recipes, searchTerm, selectedCategories).length === recipes.length)
            });
        });

        it("should only include results that have the search term in their name or ingredients", () => {
            assert(listsAreEqual(filterRecipes(recipes, "chicken", undefined).map(recipe => recipe.id), [1]));
            assert(listsAreEqual(filterRecipes(recipes, "cookie", undefined).map(recipe => recipe.id), [2]));
            assert(listsAreEqual(filterRecipes(recipes, "sugar", undefined).map(recipe => recipe.id), [0, 2]));
        });

        it("should only include results that have the selected categories", () => {
            assert(listsAreEqual(filterRecipes(recipes, undefined, "Main Course").map(recipe => recipe.id), [1]));
            assert(listsAreEqual(filterRecipes(recipes, undefined, "Dessert").map(recipe => recipe.id), [0, 2]));
        });
    });

});
