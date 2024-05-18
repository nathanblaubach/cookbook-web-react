import { describe, it, expect } from 'vitest';
import { Category, CookbookRepository, Recipe } from '../data/cookbook-repository';
import { RecipeUseCases } from './recipe-use-cases';

describe('getFilteredRecipeCards', () => {

  const categories: Category[] = [
    { id: 1, name: 'Dessert' },
    { id: 2, name: 'Beverage' },
    { id: 3, name: 'Main Course' }
  ];

  const recipes: Recipe[] = [
    {
      id: 1,
      name: 'Chocolate Cake',
      ingredients: ['flour', 'sugar', 'chocolate', 'eggs'],
      category: { id: 1, name: 'Dessert' },
      instructions: []
    },
    {
      id: 2,
      name: 'Chocolate Chip Cookies',
      ingredients: ['flour', 'sugar', 'chocolate chips', 'eggs'],
      category: { id: 1, name: 'Dessert' },
      instructions: []
    },
    {
      id: 3,
      name: 'Hot Chocolate',
      ingredients: ['cocoa'],
      category: { id: 2, name: 'Beverage' },
      instructions: []
    },
    {
      id: 4,
      name: 'Hot Cocoa',
      ingredients: ['chocolate'],
      category: { id: 2, name: 'Beverage' },
      instructions: []
    },
    {
      id: 5,
      name: 'Chicken Alfredo',
      ingredients: ['chicken', 'pasta', 'alfredo sauce'],
      category: { id: 3, name: 'Main Course' },
      instructions: []
    }
  ];

  const recipeUseCases: RecipeUseCases = new RecipeUseCases(new CookbookRepository(categories, recipes));

  it('should contain all recipes when search term and category ids do not limit them', () => {
    // Arrange
    const searchTerm = '';
    const categoryIds: number[] = [];

    // Act
    const recipeCards = recipeUseCases.getFilteredRecipeCards(searchTerm, categoryIds);

    // Assert
    expect(recipeCards.length).toBe(recipes.length);
  });

  it('should not display ingredients with search term when search term is less than 3 characters long', () => {
    // Arrange
    const searchTerm = 'ch';
    const categoryIds: number[] = [];

    // Act
    const recipeCards = recipeUseCases.getFilteredRecipeCards(searchTerm, categoryIds);

    // Assert
    const idOfRecipeWithChocolateIngredient = 1;
    const recipeCard = recipeCards.find((recipeCard) => recipeCard.id === idOfRecipeWithChocolateIngredient)!;
    expect(recipeCard.relevantIngredients.length).toBe(0);
  });

  it('should display ingredients with search term when search term is 3 or more characters long', () => {
    // Arrange
    const searchTerm = 'cho';
    const categoryIds: number[] = [];

    // Act
    const recipeCards = recipeUseCases.getFilteredRecipeCards(searchTerm, categoryIds);

    // Assert
    const idOfRecipeWithChocolateIngredient = 1;
    const recipeCard = recipeCards.find((recipeCard) => recipeCard.id === idOfRecipeWithChocolateIngredient)!;
    expect(recipeCard.relevantIngredients.length).toBe(1);
  });

  it('should display recipes when the search term matches only the recipe name', () => {
    // Arrange
    const searchTerm = 'chocolate';
    const categoryIds: number[] = [];

    // Act
    const recipeCards = recipeUseCases.getFilteredRecipeCards(searchTerm, categoryIds);

    // Assert
    expect(recipeCards.map(recipeCard => recipeCard.id)).toContain(3);
  });

  it('should display recipes when the search term matches only the recipe ingredients', () => {
    // Arrange
    const searchTerm = 'chocolate';
    const categoryIds: number[] = [];

    // Act
    const recipeCards = recipeUseCases.getFilteredRecipeCards(searchTerm, categoryIds);

    // Assert
    expect(recipeCards.map(recipeCard => recipeCard.id)).toContain(4);
  });

  it('should not display recipes that do not have a name or ingredient that contains the search term', () => {
    // Arrange
    const searchTerm = 'chocolate';
    const categoryIds: number[] = [];

    // Act
    const recipeCards = recipeUseCases.getFilteredRecipeCards(searchTerm, categoryIds);

    // Assert
    expect(recipeCards.map(recipeCard => recipeCard.id)).not.toContain(5);
  });

  it('should display recipes with categories in the selected list', () => {
    // Arrange
    const searchTerm = '';
    const categoryIds: number[] = [1, 3];

    // Act
    const recipeCards = recipeUseCases.getFilteredRecipeCards(searchTerm, categoryIds);

    // Assert
    expect(recipeCards.map(recipeCard => recipeCard.id)).toContain(1);
    expect(recipeCards.map(recipeCard => recipeCard.id)).toContain(2);
    expect(recipeCards.map(recipeCard => recipeCard.id)).toContain(5);
  });

  it('should not display recipes with categories not in the selected list', () => {
    // Arrange
    const searchTerm = '';
    const categoryIds: number[] = [1, 3];

    // Act
    const recipeCards = recipeUseCases.getFilteredRecipeCards(searchTerm, categoryIds);

    // Assert
    expect(recipeCards.map(recipeCard => recipeCard.id)).not.toContain(3);
    expect(recipeCards.map(recipeCard => recipeCard.id)).not.toContain(4);
  });

});