import React from 'react';

const swapped = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

/**
 * Styles
 */
const text_spacing = '.5rem';

const notecard_row_style = {
  backgroundColor: 'lightyellow',
  color: 'black',
  borderLeft: '1px darkgray solid',
  borderRight: '1px darkgray solid',
  borderBottom: '1px darkgray solid',
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

const NotecardViewTitle = (props) => (
  <div style={notecard_title_style}>
    <h2 style={{ margin: '0 auto' }}>{props.title}</h2>
  </div>
);

const NotecardEditTitle = (props) => (
  <div style={notecard_title_style}>
    <input style={notecard_title_input_style} placeholder={props.placeholder} value={props.title} ref={input => input && input.focus()} onChange={props.onNameChange}/>
  </div>
);

const NotecardSubtitle = (props) => (
  <div style={notecard_subtitle_style}>{props.subtitle}</div>
);

const NotecardViewSection = (props) => (
  props.rows.map((row, id) => <div key={id} style={notecard_row_style}>{row}</div>)
);

const keys = {
  backspace: 8,
  enter: 13,
  up_arrow: 38,
  down_arrow: 40
}
const keyPressedIs = (event, value) => {
  event = event || window.event;
  return event.which === value || event.keyCode === value
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
    this.handleKeys = this.handleKeys.bind(this);
  }
  moveUp = (index) => this.setState({ items: swapped(this.state.items, index, Math.max(index - 1, 0)) });
  moveDown = (index) => this.setState({ items: swapped(this.state.items, index, Math.min(index + 1, this.state.items.length - 1)) });
  delete = (index) => {
    this.setState({ items: this.state.items.filter((val, i) => i !== index) });
    if (this.state.items.length > 0) {
      this.setState({selected_index: this.state.selected_index - 1});
    } else {
      this.create(0);
    }
  }
  create = (index) => {
    const all_items = this.state.items;
    all_items.splice(index, 0, '');
    this.setState({ selected_index: index, items: all_items });
  }
  update = (event) => {
    const all_items = this.state.items;
    all_items[this.state.selected_index] = event.target.value;
    this.setState({ items: all_items });
  }
  setSelectedIndex = (index) => {
    if (-1 < index && index < this.state.items.length) {
      this.setState({selected_index: index});
    }
  }
  handleKeys = (event) => {
    const currentlySelected = this.state.selected_index;
    if (keyPressedIs(event, keys.backspace) && event.target.value === '' && currentlySelected > 0){
      event.preventDefault();
      this.delete(currentlySelected); // Delete the currently selected line
    }
    if (keyPressedIs(event, keys.enter)){
      this.create(currentlySelected + 1); // Create a new line below the currently selected line
    }
    if (keyPressedIs(event, keys.up_arrow)){
      this.setSelectedIndex(currentlySelected - 1); // Select the line above the currently selected line
    }
    if (keyPressedIs(event, keys.down_arrow)){
      this.setSelectedIndex(currentlySelected + 1); // Select the line below the currently selected line
    }
  }

  render = () => {
    return this.state.items.map((item, index) => 
      <div key={index} style={notecard_grid_row_style}>
        <input
          style={notecard_input_style}
          placeholder={this.state.placeholder}
          value={item}
          ref={input => this.state.selected_index === index && input && input.focus()}
          onFocus={() => this.setSelectedIndex(index)}
          onBlur={() => this.setSelectedIndex(null)}
          onChange={this.update}
          onKeyDown={this.handleKeys}
        />
        <div onClick={() => this.moveUp(index)}>{up}</div>
        <div onClick={() => this.moveDown(index)}>{down}</div>
        <div onClick={() => this.delete(index)}>{remove}</div>
      </div>
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

