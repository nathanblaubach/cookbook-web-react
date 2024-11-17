import { describe, it, expect } from "vitest";
import { Recipe } from "../recipe.ts";
import { JsonRecipeRepository } from "./json-recipe-repository.ts";

const repositoryRecipes: Recipe[] = [
  {
    id: 1,
    name: 'Chocolate Cake',
    category: 'Dessert',
    ingredients: ['flour', 'sugar', 'chocolate', 'eggs'],
    instructions: ['Preheat oven to 350 degrees', 'Mix ingredients', 'Bake for 30 minutes']
  },
  {
    id: 2,
    name: 'Chocolate Chip Cookies',
    category: 'Dessert',
    ingredients: ['flour', 'sugar', 'chocolate chips', 'eggs'],
    instructions: ['Preheat oven to 375 degrees', 'Mix ingredients', 'Bake for 10 minutes']
  },
  {
    id: 3,
    name: 'Hot Chocolate',
    category: 'Beverage',
    ingredients: ['cocoa'],
    instructions: ['Heat milk', 'Add cocoa', 'Stir']
  },
  {
    id: 4,
    name: 'Hot Cocoa',
    category: 'Beverage',
    ingredients: ['chocolate'],
    instructions: ['Heat milk', 'Add chocolate', 'Stir']
  },
  {
    id: 5,
    name: 'Chicken Alfredo',
    category: 'Main Course',
    ingredients: ['chicken', 'pasta', 'alfredo sauce'],
    instructions: ['Cook chicken', 'Cook pasta', 'Add sauce']
  }
];

const recipeRepository = new JsonRecipeRepository(repositoryRecipes);

describe('getRecipesBySearchTermAndCategories', () => {
  it.each([true, false])('should get all recipes when searchTerm and categories are empty', (includeCategoryMatches) => {
    // Act
    const recipes = recipeRepository.getRecipesBySearchTermAndCategories('', [], includeCategoryMatches);

    // Assert
    expect(recipes.length).toBe(repositoryRecipes.length);
  });

  it.each([true, false])('should only return recipes with given categories', (includeCategoryMatches) => {
    // Arrange
    const categories = ['Dessert', 'Main Course'];

    // Act
    const recipes = recipeRepository.getRecipesBySearchTermAndCategories('', categories, includeCategoryMatches);

    // Assert
    recipes.forEach(recipe => expect(categories).toContain(recipe.category));
  });

  it('should only return recipes that match their name or ingredients with the given search term', () => {
    // Arrange
    const searchTerm = 'chocolate';

    // Act
    const recipes = recipeRepository.getRecipesBySearchTermAndCategories(searchTerm, [], true);

    // Assert
    expect(recipes.map(recipe => recipe.id)).toEqual([1,2,3,4])
  });

  it('should only return recipes that match their name with the given search term', () => {
    // Arrange
    const searchTerm = 'chocolate';

    // Act
    const recipes = recipeRepository.getRecipesBySearchTermAndCategories(searchTerm, [], false);

    // Assert
    expect(recipes.map(recipe => recipe.id)).toEqual([1,2,3])
  });
});

describe('getRecipeById', () => {

  it('should find recipe when it exists', () => {
    // Arrange
    const recipeId = 3;

    // Act
    const recipe = recipeRepository.getRecipeById(recipeId);

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
    const recipe = recipeRepository.getRecipeById(recipeId);

    // Assert
    expect(recipe).toBeUndefined();
  });

});


describe('getCategories', () => {

  it('should get all categories with no duplicates', () => {
    // Act
    const recipes = recipeRepository.getCategories();

    // Assert
    expect(recipes).toEqual(['Dessert', 'Beverage', 'Main Course']);
  });

});
