import {describe, expect, it} from 'vitest';
import {JsonRecipeRepository} from './adapters/repository/json-recipe-repository.ts';
import {RecipeUseCases} from './recipe-use-cases';
import {FilterItem} from '../../components/Filter/Filter';
import {FakeJsonRecipeReader} from '../../infrastructure/fake-json-recipe-reader.ts';

describe('RecipeUseCases', () => {

    const fakeJsonRecipeReader = new FakeJsonRecipeReader();
    const jsonRecipeRepository = new JsonRecipeRepository(fakeJsonRecipeReader);
    const recipeUseCases: RecipeUseCases = new RecipeUseCases(jsonRecipeRepository);

    const uncheckedCategoryFilters: FilterItem[] = [
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

    describe('getRecipeCards', () => {

        it('should contain all recipes when search term and category ids do not limit them', () => {
            // Arrange
            const searchTerm = '';

            // Act
            const recipeCards = recipeUseCases.getRecipeCards(searchTerm, uncheckedCategoryFilters);

            // Assert
            expect(recipeCards.length).toBe(fakeJsonRecipeReader.read().length);
        });

        it('should limit recipes by checked categories', () => {
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
            expect(recipeCards.map(recipeCard => recipeCard.id)).toEqual([1, 2, 5]);
        });

        const chocolateIngredientRecipeId = 1;
        const chocolateIngredientNonChocolateNameRecipeId = 4;

        it('should not activate ingredient search when search term is less than 3 characters long', () => {
            // Arrange
            const searchTerm = 'ch';

            // Act
            const recipeCards = recipeUseCases.getRecipeCards(searchTerm, uncheckedCategoryFilters);

            // Assert: Ingredients that match the search term are not displayed
            const chocolateIngredientRecipeCard = recipeCards.find(recipeCard => recipeCard.id === chocolateIngredientRecipeId);
            expect(chocolateIngredientRecipeCard).not.toBeUndefined();
            expect(chocolateIngredientRecipeCard!.contentLines.length).toBe(0);

            // Assert: Recipes that have ingredient matches without name matches are not displayed
            const chocolateIngredientNonChocolateNameRecipeCard = recipeCards.find(recipeCard => recipeCard.id === chocolateIngredientNonChocolateNameRecipeId);
            expect(chocolateIngredientNonChocolateNameRecipeCard).toBeUndefined();
        });

        it('should activate ingredient search when search term is 3 or more characters long', () => {
            // Arrange
            const searchTerm = 'cho';

            // Act
            const recipeCards = recipeUseCases.getRecipeCards(searchTerm, uncheckedCategoryFilters);

            // Assert: Ingredients that match the search term are displayed
            const chocolateIngredientRecipeCard = recipeCards.find(recipeCard => recipeCard.id === chocolateIngredientRecipeId);
            expect(chocolateIngredientRecipeCard).not.toBeUndefined();
            expect(chocolateIngredientRecipeCard!.contentLines.length).greaterThan(0);

            // Assert: Recipes that have ingredient matches without name matches are displayed
            const chocolateIngredientNonChocolateNameRecipeCard = recipeCards.find(recipeCard => recipeCard.id === chocolateIngredientNonChocolateNameRecipeId);
            expect(chocolateIngredientNonChocolateNameRecipeCard).not.toBeUndefined();
        });

    });

    describe('getCategoryFilterItems', () => {

        it('should return filter items for all categories', () => {
            // Act
            const filterItems = recipeUseCases.getCategoryFilterItems();

            // Assert
            expect(filterItems.length).toBe(jsonRecipeRepository.getCategories().length);
        });

        it('should return filter items as unchecked', () => {
            // Act
            const filterItems = recipeUseCases.getCategoryFilterItems();

            // Assert
            filterItems.forEach(item => expect(item.checked).toBe(false));
        });

    });

});
