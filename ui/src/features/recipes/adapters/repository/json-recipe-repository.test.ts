import {describe, expect, it} from "vitest";
import {JsonRecipeRepository} from "./json-recipe-repository.ts";
import {FakeJsonRecipeReader} from "../../../../infrastructure/fake-json-recipe-reader.ts";

const fakeJsonRecipeReader = new FakeJsonRecipeReader();
const jsonRecipeRepository = new JsonRecipeRepository(fakeJsonRecipeReader);

describe('getRecipesBySearchTermAndCategories', () => {
    it.each([true, false])('should get all recipes when searchTerm and categories are empty', (includeCategoryMatches) => {
        // Act
        const recipes = jsonRecipeRepository.getRecipesBySearchTermAndCategories('', [], includeCategoryMatches);

        // Assert
        expect(recipes.length).toBe(fakeJsonRecipeReader.read().length);
    });

    it.each([true, false])('should only return recipes with given categories', (includeCategoryMatches) => {
        // Arrange
        const categories = ['Dessert', 'Main Course'];

        // Act
        const recipes = jsonRecipeRepository.getRecipesBySearchTermAndCategories('', categories, includeCategoryMatches);

        // Assert
        recipes.forEach(recipe => expect(categories).toContain(recipe.category));
    });

    it('should only return recipes that match their name or ingredients with the given search term', () => {
        // Arrange
        const searchTerm = 'chocolate';

        // Act
        const recipes = jsonRecipeRepository.getRecipesBySearchTermAndCategories(searchTerm, [], true);

        // Assert
        expect(recipes.map(recipe => recipe.id)).toEqual([1, 2, 3, 4])
    });

    it('should only return recipes that match their name with the given search term', () => {
        // Arrange
        const searchTerm = 'chocolate';

        // Act
        const recipes = jsonRecipeRepository.getRecipesBySearchTermAndCategories(searchTerm, [], false);

        // Assert
        expect(recipes.map(recipe => recipe.id)).toEqual([1, 2, 3])
    });
});

describe('getRecipeById', () => {

    it('should find recipe when it exists', () => {
        // Arrange
        const recipeId = 3;

        // Act
        const recipe = jsonRecipeRepository.getRecipeById(recipeId);

        // Assert
        expect(recipe).not.toBeUndefined();
        expect(recipe!.id).toBe(recipeId);
        expect(recipe!.name).toBe('Hot Chocolate');
        expect(recipe!.category).toBe('Beverage');
        expect(recipe!.ingredients).toEqual(['cocoa']);
        expect(recipe!.instructions).toEqual(['Heat milk', 'Add cocoa', 'Stir']);
    });

    it('should not find recipe when it does not exist', () => {
        // Arrange
        const recipeId = -1;

        // Act
        const recipe = jsonRecipeRepository.getRecipeById(recipeId);

        // Assert
        expect(recipe).toBeUndefined();
    });

});


describe('getCategories', () => {

    it('should get all categories with no duplicates', () => {
        // Act
        const recipes = jsonRecipeRepository.getCategories();

        // Assert
        expect(recipes).toEqual(['Dessert', 'Beverage', 'Main Course']);
    });

});
