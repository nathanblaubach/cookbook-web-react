import React from 'react';
import { useParams } from 'react-router-dom'
import { Page } from '../../components/Page/Page';
import {
  Notecard,
  ViewableNotecardRow,
  NotecardRowType
} from '../../components/Notecard/Notecard';
import { RecipeUseCases } from '../../use-cases/recipe-use-cases';

type ViewRecipePageProps = {
  recipeUseCases: RecipeUseCases;
};

export const ViewRecipe = ({ recipeUseCases }: ViewRecipePageProps): React.JSX.Element => {

  const recipe = recipeUseCases.getRecipe(parseInt(useParams().id!, 10));
  window.scrollTo(0, 0);

  return (
    <Page>
      <Notecard title={recipe?.name ?? ''} titleEditable={false} titlePlaceholder='' onTitleChange={() => {}}>
        <ViewableNotecardRow text={'Ingredients:'} textType={NotecardRowType.Heading} />
        <React.Fragment>
          { recipe?.ingredients.map(ingredient => <ViewableNotecardRow text={ingredient} textType={NotecardRowType.Normal} />) }
        </React.Fragment>
        <ViewableNotecardRow text={'Instructions:'} textType={NotecardRowType.Heading} />
        <React.Fragment>
          { recipe?.instructions.map(instruction => <ViewableNotecardRow text={instruction} textType={NotecardRowType.Normal} />) }
        </React.Fragment>
      </Notecard>
    </Page>
  );
};
