import React, { useState } from 'react';
import { Page } from '../../components/Page/Page';
import { NotecardForm, NotecardRow, NotecardListField } from '../../components/Notecard/Notecard';
import { RecipeUseCases } from '../../use-cases/recipe-use-cases';

type RecipeFormPageProps = {
  recipeUseCases: RecipeUseCases;
};

export function RecipeFormPage({ recipeUseCases }: RecipeFormPageProps): React.JSX.Element {

  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<number>(-1);
  const [instructions, setInstructions] = useState<string[]>(['']);
  const [ingredients, setIngredients] = useState<string[]>(['']);

  return (
    <Page>
      <NotecardForm label='Recipe Name' text={name} onTextChange={setName}>
        <NotecardRow text={"Ingredients:"} isBold={true} />
        <NotecardListField rows={ingredients} placeholder={"1 Cup Sugar..."} onRowsChange={setIngredients} />
        <NotecardRow text={"Instructions:"} isBold={true} />
        <NotecardListField rows={instructions} placeholder={"Mix the ingredients together..."} onRowsChange={setInstructions} />
      </NotecardForm>
      <p>Please select a Category:</p>
      <select value={category} onChange={(event) => setCategory(parseInt(event.target.value))}>
        { recipeUseCases.getAllCategories().map(category =>
          <option key={category.id} value={category.id}>{category.name}</option>
        ) }
      </select>
      <br /><br />
      <button className="button" onClick={() => alert(`Not Implemented\n${name}\n${category}\n${ingredients.join("\n")}\n${instructions.join("\n")}`)}>Save Changes</button>
    </Page>
  );
}
