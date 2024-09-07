const { describe, it, assert } = require("./test-utils.js");
const { getRecipes, getCategories } = require("../src/js/data.js");

describe("data", () => {

    describe("getRecipes", () => {

        it("should have recipes", () => {
            const recipes = getRecipes();
            assert(recipes.length > 0);
        });

        it("should have recipe details", () => {
            const firstRecipe = getRecipes()[0];
            assert(firstRecipe.id === 0);
            assert(firstRecipe.name === "Hot Mulled Cider");
            assert(firstRecipe.category === "Beverage");
            assert(firstRecipe.ingredients.length === 7);
            assert(firstRecipe.instructions.length === 3);
        });

    });

    describe("getCategories", () => {

        it("should have categories", () => {
            const categories = getCategories();
            assert(categories.length > 0);
            assert(categories.includes("Beverage"));
        });

    });

});
