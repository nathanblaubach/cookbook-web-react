import React from 'react';

function Card(props) {
  
  // Styling
  const notecard_style = { 
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '2rem 1rem'
  };
  const notecard_title_text_style = {
    margin: 0,
    padding: 0
  };

  return React.createElement('div', { style: notecard_style, className: 'selectable' },
    React.createElement('h3', { style: notecard_title_text_style }, props.title)
  );
}

export default Card;
