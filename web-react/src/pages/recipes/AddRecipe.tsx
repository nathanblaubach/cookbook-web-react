import React, { useState, ChangeEvent } from 'react';
import { Page } from '../../components/Page';
import { DataStore } from '../../repositories/datastore';
import { 
  Notecard,
  ViewableNotecardRow,
  EditableNotecardSection,
  NotecardRowType
} from '../../components/Notecard';
import { Recipe } from '../../models/recipe';

export const AddRecipe = (): React.JSX.Element => {
  const [dataStore] = useState<DataStore>(new DataStore());
  const [recipe, setRecipe] = useState<Recipe>({
    id: -1,
    name: '',
    category: undefined,
    instructions: [],
    ingredients: []
  } as Recipe);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let tempRecipe = recipe;
    tempRecipe.name = event.target.value;
    setRecipe(tempRecipe);
  }

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    let tempRecipe = recipe;
    tempRecipe.category = dataStore.getCategories().find(category => category.id === parseInt(event.target.value));
    setRecipe(tempRecipe);
  }

  const saveRecipe = (): void => {
    dataStore.saveRecipe(recipe);
  }

  const categoryOptions = dataStore.getCategories().map(category =>
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
      <button className="button" onClick={() => saveRecipe()}>Save Changes</button>
    </Page>
  );
}
