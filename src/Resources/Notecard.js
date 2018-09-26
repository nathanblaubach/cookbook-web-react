import React from 'react';

// props:
// title - Title to be displayed at the top row of the notecard
// rows - List of strings to display (one per notecard row)
function Notecard(props) {
  
  // Styling
  const notecard_style = { 
    border: '1px darkgray solid', 
    backgroundColor: 'lightyellow' 
  };
  const notecard_title_style = {
    textAlign: 'center',
    borderBottom: '2px red solid',
    padding: '.5rem' 
  };
  const notecard_rows_style = { 
    borderBottom: '1px darkgray solid', 
    padding: '.5rem' 
  };
  const notecard_title_text_style = {
    margin: 0,
    padding: 0
  };

  return React.createElement('div', { style: notecard_style },
    React.createElement(     'div', { style: notecard_title_style },
      React.createElement(   'h3',  { style: notecard_title_text_style }, props.title)
    ),
    props.rows.map((row, id) => 
      React.createElement(   'div', { style: notecard_rows_style, key: id }, row === '' ? '\u00a0' : row)
    )
  );
}

export default Notecard;