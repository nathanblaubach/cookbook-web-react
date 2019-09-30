import React from 'react';

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const text_spacing = '.5rem';

// Styling
const notecard_row_style = { 
  // Colors
  backgroundColor: 'lightyellow',
  color: 'black',
  borderLeft: '1px darkgray solid',
  borderRight: '1px darkgray solid',
  borderBottom: '1px darkgray solid',
  
  // Spacing
  padding: text_spacing,
  margin: 0
};
const notecard_title_style = Object.assign({}, notecard_row_style, {
  borderTop: '1px darkgray solid',
  borderBottom: '2px red solid'
});
const notecard_subtitle_style = Object.assign({}, notecard_row_style, {
  fontWeight: 'bold',
});
const notecard_grid_row_style = Object.assign({}, notecard_row_style, {
  display: 'grid',
  gridTemplateColumns: '1fr 2rem 2rem 2rem',
  padding: 0
});
const notecard_input_style = {
  backgroundColor: 'transparent',
  outline: 'transparent',
  border: 'transparent',
  color: 'black',
  fontSize: '16px',
  padding: text_spacing,
  margin: 0,
  width: '100%'
};
const notecard_title_input_style = Object.assign({}, notecard_input_style, {
  fontWeight: 'bold',
  fontSize: '1.5rem'
});

//----------------------------------------------------------------------------------
// SVGs
//----------------------------------------------------------------------------------
const svg_attr = {
  xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"100%",
  strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",stroke:"#333"
};
const up = React.createElement('svg', svg_attr,
  React.createElement('polyline', {points: '10,15 15,10 20,15', fill: 'none'}),
  React.createElement('line', { x1:"15",  y1:"10",  x2:"15", y2:"20" })
);
const down = React.createElement('svg', svg_attr,
  React.createElement('polyline', {points: '10,15 15,20 20,15', fill: 'none'}),
  React.createElement('line', { x1:"15",  y1:"10",  x2:"15", y2:"20" })
);
const remove = React.createElement('svg', svg_attr,
  React.createElement('line', { x1:"10",  y1:"10",  x2:"20", y2:"20" }),
  React.createElement('line', { x1:"10",  y1:"20", x2:"20", y2:"10"  })
);

function NotecardViewTitle(props) {
  return React.createElement('div', { style: notecard_title_style },
    React.createElement('h2',  { style: { margin: '0 auto' } }, props.title)
  );
}
function NotecardEditTitle(props) {
  return React.createElement('div', { style: notecard_title_style },
    React.createElement('input', {
      style: notecard_title_input_style,
      placeholder: props.placeholder,
      value: props.title,
      ref: input => input && input.focus(),
      onChange: props.onNameChange
    })
  );
}
function NotecardSubtitle(props) {
  return React.createElement('div', { style: notecard_subtitle_style }, props.subtitle);
}
function NotecardViewSection(props) {
  return props.rows.map((row, id) => 
    React.createElement('div', { style: notecard_row_style, key: id }, 
      row
    )
  )
}
class NotecardEditSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_index: -1,
      items: props.rows,
      placeholder: props.placeholder
    };
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.handleSpecialCases = this.handleSpecialCases.bind(this);
  }
  handleSpecialCases(event) {
    event = event || window.event;
    const currentlySelected = this.state.selected_index
    
    // Backspace Key: Delete line if it's empty
    if ((event.which === 8 || event.keyCode === 8) && event.target.value === '' && currentlySelected > 0){
      event.preventDefault();
      this.delete(currentlySelected);
    }
    // Enter Key: Create a new line below the currently selected line
    if (event.which === 13 || event.keyCode === 13){
      this.create(currentlySelected + 1);
    }
    // Up Arrow Key: Go up one line
    if (event.which === 38 || event.keyCode === 38){
      this.setSelectedIndex(currentlySelected - 1);
    }
    // Down Arrow Key: Go down one line
    if (event.which === 40 || event.keyCode === 40){
      this.setSelectedIndex(currentlySelected + 1);
    }
  }
  create(index) {
    let all_items = this.state.items;
    all_items.splice(index, 0, '');
    this.setState({ selected_index: index, items: all_items });
  }
  update(event) {
    let all_items = this.state.items;
    all_items[this.state.selected_index] = event.target.value;
    this.setState({ items: all_items });
  }
  delete(index) {
    let all_items = this.state.items;
    all_items.splice(index, 1);
    this.setState({ items: all_items });
    if (this.state.items.length === 0) {
      this.create(0);
    } else {
      this.setState({selected_index: this.state.selected_index - 1});
    }
  }
  up(index) {
    if (index !== 0) {
      let all_items = this.state.items;
      swap(all_items, index, index - 1);
      this.setState({ items: all_items });
    }
  }
  down(index) {
    let all_items = this.state.items;
    if (index !== all_items.length - 1) {
      swap(all_items, index, index + 1);
      this.setState({ items: all_items });
    }
  }
  setSelectedIndex(index) {
    if (-1 < index && index < this.state.items.length) {
      this.setState({selected_index: index});
    }
  }
  getItemText(index) {
    return this.state.items[index];
  }
  render() {
    return React.createElement('div', {},
      this.state.items.map((item, index) => 
        React.createElement('div', {key: index, style: notecard_grid_row_style},
          React.createElement('input', {
            style: notecard_input_style,
            placeholder: this.state.placeholder,
            value: item,
            ref: input => this.state.selected_index === index && input && input.focus(),
            onFocus: () => this.setSelectedIndex(index),
            onBlur: () => this.setSelectedIndex(null),
            onChange: this.update,
            onKeyDown: this.handleSpecialCases
          }),
          React.createElement('div', { onClick: () => this.up(index) }, up),
          React.createElement('div', { onClick: () => this.down(index) }, down),
          React.createElement('div', { onClick: () => this.delete(index) }, remove)
        )
      )
    );
  }
}

export {
  NotecardViewTitle,
  NotecardEditTitle,
  NotecardSubtitle,
  NotecardViewSection,
  NotecardEditSection
};

