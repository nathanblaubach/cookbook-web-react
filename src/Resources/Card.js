import React from 'react';

function Card(props) {
  
  // Styling
  const card_style = { 
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '2rem 1rem'
  };
  const title_text_style = {
    margin: 0,
    padding: 0
  };
  const subtitle_text_style = {
    color: '#333'
  };

  return React.createElement('div', { style: card_style, className: 'selectable' },
    React.createElement('h3', { style: title_text_style }, props.title),
    props.relevantIngredients.map((ingredient, i) =>
      React.createElement('h5', { key: i, style: subtitle_text_style }, ingredient)
    )
  );
}

export default Card;
