import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Page } from '../../components/Page';
import { DataStore } from '../../repositories/datastore';
import {
  Notecard,
  ViewableNotecardRow,
  NotecardRowType
} from '../../components/Notecard';

export const ViewRecipe = (): React.JSX.Element => {
  const [dataStore] = useState<DataStore>(new DataStore());
  const { id } = useParams();
  const recipe = dataStore.getRecipe(parseInt(id!, 10));
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
