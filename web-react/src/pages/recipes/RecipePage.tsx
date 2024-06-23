import React from 'react';
import { useParams } from 'react-router-dom'
import { Page } from '../../components/Page/Page';
import { Notecard, NotecardRow } from '../../components/Notecard/Notecard';
import { RecipeUseCases } from '../../use-cases/recipe-use-cases';
import { Recipe } from '../../types/recipe';

type RecipePageProps = {
  recipeUseCases: RecipeUseCases;
};

export function RecipePage({ recipeUseCases }: RecipePageProps): React.JSX.Element {

  window.scrollTo(0, 0);

  const recipeId: number = parseInt(useParams().id!, 10);
  const recipe: Recipe | undefined = recipeUseCases.getRecipe(recipeId);

  return recipe === undefined ? (
    <Page>
      <h1>Recipe Not Found</h1>
    </Page>
  ) : (
    <Page>
      <Notecard label={'Recipe Name'} text={recipe.name}>
        <NotecardRow text={'Ingredients:'} isBold={true} />
        { recipe.ingredients.map(ingredient => <NotecardRow text={ingredient} />) }
        <NotecardRow text={'Instructions:'} isBold={true} />
        { recipe.instructions.map(instruction => <NotecardRow text={instruction} />) }
      </Notecard>
    </Page>
  );
};
