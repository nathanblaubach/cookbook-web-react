import { render } from '@testing-library/react';
import { RecipeCard, RecipeCardProps } from './RecipeCard';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('RecipeCard', () => {

  // Arrange
  const recipe: RecipeCardProps = {
    id: 736,
    name: 'Pasta Carbonara',
    relevantIngredients: ['Pasta', 'Eggs', 'Bacon', 'Parmesan Cheese'],
  };

  // Act
  const component = render(
    <BrowserRouter>
      <RecipeCard {...recipe} />
    </BrowserRouter>
  );

  it('should display the recipe name', () => {
    // Assert
    const displayedName = component
      .getByRole('heading')
      .textContent;
    expect(displayedName).toBe(recipe.name);
  });

  it('should display the recipe ingredients', () => {
    // Assert
    const displayedIngredients = component
      .getAllByRole('paragraph')
      .map(element => element.textContent);
    expect(displayedIngredients).toEqual(recipe.relevantIngredients);
  });

  it('should display the recipe link', () => {
    // Assert
    const displayedUrl = component
      .getByRole('link')
      .getAttribute('href');
    expect(displayedUrl).toContain(recipe.id);
  });
});