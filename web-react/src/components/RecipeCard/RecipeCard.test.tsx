import { render } from '@testing-library/react';
import { RecipeCard, RecipeCardProps } from './RecipeCard';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('RecipeCard', () => {

  it('renders recipe name, ingredients and link correctly', () => {

    // Arrange
    const recipe: RecipeCardProps = {
      id: 1,
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
    const headingText = component.getByRole('heading').innerHTML;
    expect(headingText).toBe(recipe.name);

    const paragraphTexts = component
      .getAllByRole('paragraph')
      .map(element => element.innerHTML);
    
    expect(paragraphTexts.length).toEqual(recipe.relevantIngredients.length);
    recipe.relevantIngredients.forEach((ingredient) => {
      expect(paragraphTexts).toContain(ingredient);
    });

    const linkText = component.getByRole('link').innerHTML;
    expect(linkText).toContain(recipe.name);

  });
});