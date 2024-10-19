import { describe, it, expect } from 'vitest';
import { RecipeRepository } from '../data/recipe-repository';
import { RecipeUseCases } from './recipe-use-cases';
import { Recipe } from '../types/recipe';
import { FilterItem } from '../components/Filter/Filter';

const repositoryRecipes: Recipe[] = [
  {
    id: 1,
    name: 'Chocolate Cake',
    category: 'Dessert',
    ingredients: ['flour', 'sugar', 'chocolate', 'eggs'],
    instructions: []
  },
  {
    id: 2,
    name: 'Chocolate Chip Cookies',
    category: 'Dessert',
    ingredients: ['flour', 'sugar', 'chocolate chips', 'eggs'],
    instructions: []
  },
  {
    id: 3,
    name: 'Hot Chocolate',
    category: 'Beverage',
    ingredients: ['cocoa'],
    instructions: []
  },
  {
    id: 4,
    name: 'Hot Cocoa',
    category: 'Beverage',
    ingredients: ['chocolate'],
    instructions: []
  },
  {
    id: 5,
    name: 'Chicken Alfredo',
    category: 'Main Course',
    ingredients: ['chicken', 'pasta', 'alfredo sauce'],
    instructions: []
  }
];

const testRepository = new RecipeRepository(repositoryRecipes);
const recipeUseCases: RecipeUseCases = new RecipeUseCases(testRepository);

describe('Recipe Card Grid Search and Filter: getRecipeCards', () => {

  it('should contain all recipes when search term and category ids do not limit them', () => {
    // Arrange
    const searchTerm = '';
    const categoryFilters: FilterItem[] = [
      {
        id: 'Dessert',
        name: 'Dessert',
        checked: false
      },
      {
        id: 'Beverage',
        name: 'Beverage',
        checked: false
      },
      {
        id: 'Main Course',
        name: 'Main Course',
        checked: false
      }
    ];

    // Act
    const recipeCards = recipeUseCases.getRecipeCards(searchTerm, categoryFilters);

    // Assert
    expect(recipeCards.length).toBe(repositoryRecipes.length);
  });

  it('should not display ingredients with search term when search term is less than 3 characters long', () => {
    // Arrange
    const searchTerm = 'ch';
    const categoryFilters: FilterItem[] = [
      {
        id: 'Dessert',
        name: 'Dessert',
        checked: false
      },
      {
        id: 'Beverage',
        name: 'Beverage',
        checked: false
      },
      {
        id: 'Main Course',
        name: 'Main Course',
        checked: false
      }
    ];

    // Act
    const recipeCards = recipeUseCases.getRecipeCards(searchTerm, categoryFilters);

    // Assert
    const idOfRecipeWithChocolateIngredient = 1;
    const recipeCard = recipeCards.find((recipeCard) => recipeCard.id === idOfRecipeWithChocolateIngredient)!;
    expect(recipeCard.contentLines.length).toBe(0);
  });

  it('should display ingredients with search term when search term is 3 or more characters long', () => {
    // Arrange
    const searchTerm = 'cho';
    const categoryFilters: FilterItem[] = [
      {
        id: 'Dessert',
        name: 'Dessert',
        checked: false
      },
      {
        id: 'Beverage',
        name: 'Beverage',
        checked: false
      },
      {
        id: 'Main Course',
        name: 'Main Course',
        checked: false
      }
    ];

    // Act
    const recipeCards = recipeUseCases.getRecipeCards(searchTerm, categoryFilters);

    // Assert
    const idOfRecipeWithChocolateIngredient = 1;
    const recipeCard = recipeCards.find((recipeCard) => recipeCard.id === idOfRecipeWithChocolateIngredient)!;
    expect(recipeCard.contentLines.length).toBe(1);
  });

  it('should display recipes when the search term matches only the recipe name', () => {
    // Arrange
    const searchTerm = 'chocolate';
    const categoryFilters: FilterItem[] = [
      {
        id: 'Dessert',
        name: 'Dessert',
        checked: false
      },
      {
        id: 'Beverage',
        name: 'Beverage',
        checked: false
      },
      {
        id: 'Main Course',
        name: 'Main Course',
        checked: false
      }
    ];

    // Act
    const recipeCards = recipeUseCases.getRecipeCards(searchTerm, categoryFilters);

    // Assert
    expect(recipeCards.map(recipeCard => recipeCard.id)).toContain(3);
  });

  it('should display recipes when the search term matches only the recipe ingredients', () => {
    // Arrange
    const searchTerm = 'chocolate';
    const categoryFilters: FilterItem[] = [
      {
        id: 'Dessert',
        name: 'Dessert',
        checked: false
      },
      {
        id: 'Beverage',
        name: 'Beverage',
        checked: false
      },
      {
        id: 'Main Course',
        name: 'Main Course',
        checked: false
      }
    ];

    // Act
    const recipeCards = recipeUseCases.getRecipeCards(searchTerm, categoryFilters);

    // Assert
    expect(recipeCards.map(recipeCard => recipeCard.id)).toContain(4);
  });

  it('should not display recipes that do not have a name or ingredient that contains the search term', () => {
    // Arrange
    const searchTerm = 'chocolate';
    const categoryFilters: FilterItem[] = [
      {
        id: 'Dessert',
        name: 'Dessert',
        checked: false
      },
      {
        id: 'Beverage',
        name: 'Beverage',
        checked: false
      },
      {
        id: 'Main Course',
        name: 'Main Course',
        checked: false
      }
    ];

    // Act
    const recipeCards = recipeUseCases.getRecipeCards(searchTerm, categoryFilters);

    // Assert
    expect(recipeCards.map(recipeCard => recipeCard.id)).not.toContain(5);
  });

  it('should display recipes with categories in the selected list', () => {
    // Arrange
    const searchTerm = '';
    const categoryFilters: FilterItem[] = [
      {
        id: 'Dessert',
        name: 'Dessert',
        checked: true
      },
      {
        id: 'Beverage',
        name: 'Beverage',
        checked: false
      },
      {
        id: 'Main Course',
        name: 'Main Course',
        checked: true
      }
    ];

    // Act
    const recipeCards = recipeUseCases.getRecipeCards(searchTerm, categoryFilters);

    // Assert
    expect(recipeCards.map(recipeCard => recipeCard.id)).toContain(1);
    expect(recipeCards.map(recipeCard => recipeCard.id)).toContain(2);
    expect(recipeCards.map(recipeCard => recipeCard.id)).toContain(5);
  });

  it('should not display recipes with categories not in the selected list', () => {
    // Arrange
    const searchTerm = '';
    const categoryFilters: FilterItem[] = [
      {
        id: 'Dessert',
        name: 'Dessert',
        checked: true
      },
      {
        id: 'Beverage',
        name: 'Beverage',
        checked: false
      },
      {
        id: 'Main Course',
        name: 'Main Course',
        checked: true
      }
    ];

    // Act
    const recipeCards = recipeUseCases.getRecipeCards(searchTerm, categoryFilters);

    // Assert
    expect(recipeCards.map(recipeCard => recipeCard.id)).not.toContain(3);
    expect(recipeCards.map(recipeCard => recipeCard.id)).not.toContain(4);
  });

});

describe('Get categories as filter items', () => {

  it('should return filter items for all categories', () => {
    // Act
    const filterItems = recipeUseCases.getCategoryFilterItems();

    // Assert
    expect(filterItems.length).toBe(testRepository.getCategories().length);
  });

  it('should return filter items as unchecked', () => {
    // Act
    const filterItems = recipeUseCases.getCategoryFilterItems();

    // Assert
    filterItems.forEach(item => expect(item.checked).toBe(false));
  });

});
