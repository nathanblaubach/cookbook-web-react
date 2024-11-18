import {describe, expect, it} from "vitest";
import {FileJsonRecipeReader} from "./file-json-recipe-reader.ts";

describe("FileJsonRecipeReader", () => {
    it("should get json recipes out of the file", async () => {
        // Arrange
        const fileJsonRecipeReader = new FileJsonRecipeReader();

        // Act
        const recipes = fileJsonRecipeReader.read();

        // Assert
        expect(recipes.length).greaterThan(0);
        recipes.forEach((recipe) => {
            expect(recipe.id).not.toBeUndefined();
            expect(recipe.name).not.toBeUndefined();
            expect(recipe.category).not.toBeUndefined();
            expect(recipe.ingredients).not.toBeUndefined();
            expect(recipe.instructions).not.toBeUndefined();
        })
    })
});