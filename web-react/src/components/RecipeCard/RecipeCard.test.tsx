import { render } from '@testing-library/react';
import { RecipeCard, RecipeCardProps } from './RecipeCard';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('RecipeCard', () => {
  it('renders recipe name, ingredients and link correctly', () => {

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

    // Assert
    const displayedName = component
      .getByRole('heading')
      .textContent;
    expect(displayedName).toBe(recipe.name);

    const displayedIngredients = component
      .getAllByRole('paragraph')
      .map(element => element.textContent);
    expect(displayedIngredients).toEqual(recipe.relevantIngredients);
    
    const displayedUrl = component
      .getByRole('link')
      .getAttribute('href');
    expect(displayedUrl).toContain(recipe.id);

  });
});