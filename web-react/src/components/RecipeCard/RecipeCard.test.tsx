import { render, screen } from '@testing-library/react';
import { RecipeCard, RecipeCardProps } from './RecipeCard';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('RecipeCard', () => {
  const recipe: RecipeCardProps = {
    id: 1,
    name: 'Pasta Carbonara',
    relevantIngredients: ['Pasta', 'Eggs', 'Bacon', 'Parmesan Cheese'],
  };

  it('renders recipe name, ingredients and link correctly', () => {
    // Act
    render(<BrowserRouter><RecipeCard {...recipe} /></BrowserRouter>);

    // Assert
    
    expect(screen.getByRole('heading').innerHTML).toBe(recipe.name);

    const paragraphTexts = screen
      .getAllByRole('paragraph')
      .map(element => element.innerHTML);
    
    expect(paragraphTexts.length).toEqual(recipe.relevantIngredients.length);
    recipe.relevantIngredients.forEach((ingredient) => {
      expect(paragraphTexts).toContain(ingredient);
    });

    expect(screen.getByRole('link').innerHTML).toContain(recipe.name);
  });
});