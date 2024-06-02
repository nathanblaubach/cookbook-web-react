import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import './Notecard.css';

function swapArrayValuesAtIndices(arrayValues: Array<string>, leftIndex: number, rightIndex: number): Array<string> {
  const temp: string = arrayValues[leftIndex];
  arrayValues[leftIndex] = arrayValues[rightIndex];
  arrayValues[rightIndex] = temp;
  return arrayValues;
}

/**
 * SVG
 */
const up = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="100%" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" stroke="#333">
    <polyline points="10,15 15,10 20,15" fill="none" />
    <line x1="15" y1="10" x2="15" y2="20" />
  </svg>
);

const down = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="100%" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" stroke="#333">
    <polyline points="10,15 15,20 20,15" fill="none" />
    <line x1="15" y1="10" x2="15" y2="20" />
  </svg>
);

const remove = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="100%" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" stroke="#333">
    <line x1="10" y1="10" x2="20" y2="20" />
    <line x1="10" y1="20" x2="20" y2="10" />
  </svg>
);

type NotecardProps = {
  children: React.ReactNode,
  title: string,
  titleEditable: boolean,
  titlePlaceholder: string,
  onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void
};

export function Notecard({ children, title, titleEditable, titlePlaceholder, onTitleChange }: NotecardProps): React.JSX.Element {
  return (
    <div className='notecard'>
      <div className='notecard-row notecard-row-title'>
        {
          titleEditable === true
            ? <input className='notecard-text notecard-text-title' placeholder={titlePlaceholder} value={title} ref={input => input && input.focus()} onChange={onTitleChange}/>
            : <p className='notecard-text notecard-text-title'>{title}</p>
        }
      </div>
      {children}
    </div>
  );
}

export enum NotecardRowType {
  Heading,
  Normal
}

function fontWeight(rowType: NotecardRowType): string {
  switch (rowType) {
    case NotecardRowType.Heading: return 'bold';
    case NotecardRowType.Normal: return 'normal';
    default: return '';
  }
}

type ViewableNotecardRowProps = {
  text: string,
  textType: NotecardRowType
};

export function ViewableNotecardRow({ text, textType }: ViewableNotecardRowProps): React.JSX.Element { 
  return (
    <div className='notecard-row notecard-row-border'>
      <p className='notecard-text notecard-text-font' style={{ fontWeight: fontWeight(textType) }}>
        {text}
      </p>
    </div>
  );
}

type EditableNotecardRowProps = {
  text: string,
  textType: NotecardRowType,
  textPlaceholder: string,
  onTextChange: (event: ChangeEvent<HTMLInputElement>) => void
};

export function EditableNotecardRow({ text, textType, textPlaceholder, onTextChange }: EditableNotecardRowProps): React.JSX.Element {
  return (
    <div className='notecard-row notecard-row-border'>
      <input 
        className='notecard-text notecard-text-font'
        style={{ fontWeight: fontWeight(textType) }}
        placeholder={textPlaceholder} 
        value={text}
        ref={input => input && input.focus()}
        onChange={onTextChange}
      />
    </div>
  );
}

function keyPressedIs(event: KeyboardEvent<HTMLInputElement>, value: number): boolean {
  event = event || window.event;
  return event.which === value || event.keyCode === value
}

function isBackspacePress(event: KeyboardEvent<HTMLInputElement>): boolean {
  return keyPressedIs(event, 8);
}

function isEnterPress(event: KeyboardEvent<HTMLInputElement>): boolean {
  return keyPressedIs(event, 13);
}

function isUpArrowPress(event: KeyboardEvent<HTMLInputElement>): boolean {
  return keyPressedIs(event, 38);
}

function isDownArrowPress(event: KeyboardEvent<HTMLInputElement>): boolean {
  return keyPressedIs(event, 40);
}

type EditableNotecardSectionParams = {
  rows: Array<string>,
  placeholder: string
};

export function EditableNotecardSection({ rows, placeholder }: EditableNotecardSectionParams): React.JSX.Element {
  const [items, setItems] = useState<Array<string>>(rows);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  function moveUp(index: number): void {
    if (index > 0) {
      setItems(swapArrayValuesAtIndices(items, index, index - 1));
      setSelectedIndex(index - 1);
    }
  }
  
  function moveDown(index: number): void {
    if (index < items.length - 1) {
      setItems(swapArrayValuesAtIndices(items, index, index + 1));
      setSelectedIndex(index + 1);
    }
  }

  function createAtIndex(index: number, item: string): void {
    setItems([...items.slice(0, index), item, ...items.slice(index, items.length)]);
    setSelectedIndex(index);
  }

  function updateAtSelectedIndex(event: ChangeEvent<HTMLInputElement>): void {
    const allItems = items;
    allItems[selectedIndex] = event.target.value;
    setItems(allItems);
  }

  function deleteAtIndex(index: number): void {
    setItems([...items.slice(0, index), ...items.slice(index + 1, items.length)]);
    if (items.length === 0) {
      createAtIndex(0, '');
    } else if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }

  function handleKeysAtSelectedIndex(event: KeyboardEvent<HTMLInputElement>): void {
    if (isBackspacePress(event) && items[selectedIndex] === '' && selectedIndex > 0){
      event.preventDefault();
      deleteAtIndex(selectedIndex); // Delete the currently selected line
    } else if (isEnterPress(event)) {
      createAtIndex(selectedIndex + 1, ''); // Create a new line below
    } else if (isUpArrowPress(event) && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1); // Select the row above
    } else if (isDownArrowPress(event) && selectedIndex < items.length - 1) {
      setSelectedIndex(selectedIndex + 1); // Select the row below
    }
  }

  return (
    <React.Fragment>
      {
        items.map((item, index) => 
          <div key={index} className='notecard-row notecard-row-edit'>
            <input
              className='notecard-text notecard-text-edit'
              placeholder={placeholder}
              value={item}
              ref={input => selectedIndex === index && input && input.focus()}
              onFocus={() => setSelectedIndex(index)}
              onBlur={() => setSelectedIndex(-1)}
              onChange={updateAtSelectedIndex}
              onKeyDown={handleKeysAtSelectedIndex}
            />
            <div onClick={() => moveUp(index)}>{up}</div>
            <div onClick={() => moveDown(index)}>{down}</div>
            <div onClick={() => deleteAtIndex(index)}>{remove}</div>
          </div>
        )
      }
    </React.Fragment>
  );
}
