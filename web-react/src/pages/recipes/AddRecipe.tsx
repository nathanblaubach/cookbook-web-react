import React, { useState, ChangeEvent } from 'react';
import { Page } from '../../components/Page/Page';
import { 
  Notecard,
  ViewableNotecardRow,
  EditableNotecardSection,
  NotecardRowType
} from '../../components/Notecard/Notecard';
import { RecipeUseCases } from '../../use-cases/recipe-use-cases';
import { Recipe } from '../../types/recipe';

type AddRecipePageProps = {
  recipeUseCases: RecipeUseCases;
};

export function AddRecipe({ recipeUseCases }: AddRecipePageProps): React.JSX.Element {
  const defaultRecipe: Recipe = {
    id: -1,
    name: '',
    category: { id: -1, name: '' },
    instructions: [],
    ingredients: []
  };

  const [recipe, setRecipe] = useState<Recipe>(defaultRecipe);

  function handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
    let tempRecipe = recipe;
    tempRecipe.name = event.target.value;
    setRecipe(tempRecipe);
  }

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>): void {
    let tempRecipe = recipe;
    tempRecipe.category = recipeUseCases.getCategory(parseInt(event.target.value))!;
    setRecipe(tempRecipe);
  }

  const categoryOptions = recipeUseCases.getAllCategories().map(category =>
    <option key={category.id} value={category.id}>{category.name}</option>
  );

  return (
    <Page>
      <Notecard title={recipe.name} titleEditable={true} titlePlaceholder='Enter Recipe Name Here' onTitleChange={handleNameChange}>
        <ViewableNotecardRow text={"Ingredients:"} textType={NotecardRowType.Heading} />
        <EditableNotecardSection rows={recipe.ingredients} placeholder={"1 Cup Sugar..."} />
        <ViewableNotecardRow text={"Instructions:"} textType={NotecardRowType.Heading}/>
        <EditableNotecardSection rows={recipe.instructions} placeholder={"Mix the ingredients together..."} />
      </Notecard>
      <p>Please select a Category:</p>
      <select value={recipe.category?.id} onChange={handleCategoryChange}>{ categoryOptions }</select>
      <br /><br />
      <button className="button" onClick={() => alert("Not Implemented")}>Save Changes</button>
    </Page>
  );
}
