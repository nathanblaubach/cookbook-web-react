import React from "react";
import './Filter.css';

export type FilterItem = {
  id: string,
  name: string,
  checked: boolean
};

export type FilterProps = {
  type: string,
  items: FilterItem[],
  onItemsUpdate: (filterItems: FilterItem[]) => void,
}

export function Filter({ items, type, onItemsUpdate }: FilterProps): React.JSX.Element {

  function alertParentOfFilterToggle(filterItemId: string): void {
    const filterItemsAfterToggle = items.map(item => {
      return item.id !== filterItemId ? item : {
        ...item,
        checked: !item.checked,
      }
    });

    onItemsUpdate(filterItemsAfterToggle);
  }

  return (
    <div className="filters">
      {
        items.map(filterItem =>
          <div key={filterItem.id} className="filter" style={{ marginBottom: '.5rem' }}>
            <input
              type="checkbox"
              aria-label={`${type} Filter: ${filterItem.name}`}
              id={filterItem.id.toString()}
              checked={filterItem.checked}
              onChange={() => alertParentOfFilterToggle(filterItem.id)}
            />
            <label htmlFor={filterItem.id.toString()}>{filterItem.name}</label>
          </div>
        )
      }
    </div>
  );

}
