import { describe, it, expect } from "vitest";
import { Recipe } from "../types";
import { RecipeRepository } from "./recipe-repository";

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

const recipeRepository = new RecipeRepository(repositoryRecipes);

describe('getRecipes', () => {

  it('should get all recipes', () => {
    // Act
    const recipes = recipeRepository.getRecipes();

    // Assert
    expect(recipes.length).toBe(repositoryRecipes.length);
  });

  it('should return all recipe fields', () => {
    // Act
    const firstRecipe = recipeRepository.getRecipes()[0];

    // Assert
    expect(firstRecipe.id).toBe(1);
    expect(firstRecipe.name).toBe('Chocolate Cake');
    expect(firstRecipe.category).toBe('Dessert');
    expect(firstRecipe.ingredients).toEqual(['flour', 'sugar', 'chocolate', 'eggs']);
    expect(firstRecipe.instructions).toEqual(['Preheat oven to 350 degrees', 'Mix ingredients', 'Bake for 30 minutes']);
  });

});

describe('getRecipesBySearchTermAndCategories', () => {

  it('should get all recipes when searchTerm and categories are empty', () => {
    // Act
    const recipes = recipeRepository.getRecipesBySearchTermAndCategories('', []);

    // Assert
    expect(recipes.length).toBe(repositoryRecipes.length);
  });

  it('should only return recipes with given categories', () => {
    // Arrange
    const categories = ['Dessert', 'Main Course'];

    // Act
    const recipes = recipeRepository.getRecipesBySearchTermAndCategories('', categories);

    // Assert
    recipes.forEach(recipe => expect(categories).toContain(recipe.category));
  });

  it('should only return recipes that match the given search term', () => {
    // Arrange
    const searchTerm = 'chocolate';

    // Act
    const recipes = recipeRepository.getRecipesBySearchTermAndCategories(searchTerm, []);

    // Assert
    recipes.forEach(recipe => {
      const matchedNames = [
        recipe.name.toLocaleLowerCase(),
        ...recipe.ingredients.map(ingredient => ingredient.toLocaleLowerCase())
      ].filter(name => name.includes(searchTerm))
      expect(matchedNames.length).toBeGreaterThan(0);
    });
  });

  it('should include ingredient search results when the search term length is 3 or greater', () => {
    // Arrange
    const searchTerm = 'cho';

    // Act
    const recipes = recipeRepository.getRecipesBySearchTermAndCategories(searchTerm, []);

    // Assert
    expect(recipes.map(recipe => recipe.name)).toContain('Hot Cocoa');
  });

  it('should include ingredient search results when the search term length is less than 3', () => {
    // Arrange
    const searchTerm = 'ch';

    // Act
    const recipes = recipeRepository.getRecipesBySearchTermAndCategories(searchTerm, []);

    // Assert
    expect(recipes.map(recipe => recipe.name)).not.toContain('Hot Cocoa');
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
