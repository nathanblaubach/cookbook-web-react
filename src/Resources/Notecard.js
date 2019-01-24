import React from 'react';

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

// Styling
const notecard_row_style = { 
  backgroundColor: 'lightyellow',
  borderLeft: '1px darkgray solid',
  borderRight: '1px darkgray solid',
  borderBottom: '1px darkgray solid',
  padding: '.5rem'
};
const notecard_title_style = Object.assign({}, notecard_row_style, {
  borderTop: '1px darkgray solid',
  borderBottom: '2px red solid',
  textAlign: 'center'
});
const notecard_subtitle_style = Object.assign({}, notecard_row_style, {
  fontWeight: 'bold'
});
const notecard_grid_row_style = Object.assign({}, notecard_row_style, {
  display: 'grid',
  gridGap: '.5rem',
  gridTemplateColumns: '1fr 20px 20px 20px',
  gridTemplateRows: '20px'
});
const notecard_input_style = {
  backgroundColor: 'transparent',
  border: 'transparent',
  outline: 'transparent',
  fontSize: '1rem',
  width: '100%'
};

//----------------------------------------------------------------------------------
// SVGs
//----------------------------------------------------------------------------------
const svg_attr = {
  xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",height:'20px',width:'20px',
  strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",stroke:"#333"
};
const up = React.createElement('svg', svg_attr,
  React.createElement('polyline', {points: '5,10 10,5 15,10', fill: 'none'}),
  React.createElement('line', { x1:"10",  y1:"5",  x2:"10", y2:"15" })
);
const down = React.createElement('svg', svg_attr,
  React.createElement('polyline', {points: '5,10 10,15 15,10', fill: 'none'}),
  React.createElement('line', { x1:"10",  y1:"5",  x2:"10", y2:"15" })
);
const remove = React.createElement('svg', svg_attr,
  React.createElement('line', { x1:"5",  y1:"5",  x2:"15", y2:"15" }),
  React.createElement('line', { x1:"5",  y1:"15", x2:"15", y2:"5"  })
);

function NotecardTitle(props) {
  return React.createElement('div', { style: notecard_title_style },
    React.createElement('h3',  { style: { margin: '0 auto' } }, props.title)
  );
}
function NotecardSubtitle(props) {
  return React.createElement('div', { style: notecard_subtitle_style }, props.subtitle);
}
function NotecardViewSection(props) {
  return props.rows.map((row, id) => 
    React.createElement('div', { style: notecard_row_style, key: id }, row)
  )
}
class NotecardEditSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_index: -1,
      items: props.rows
    };
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleEnter(event) {
    event = event || window.event;
    if (event.which === 13 || event.keyCode === 13){
      this.create(this.state.selected_index + 1);
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
    this.setState({selected_index: index});
  }
  render() {
    return React.createElement('div', {},
      this.state.items.map((item, index) => 
        React.createElement('div', {key: index, style: notecard_grid_row_style},
          React.createElement('input', {
            style: notecard_input_style,
            value: item,
            ref: input => this.state.selected_index === index && input && input.focus(),
            onChange: this.update,
            onClick: () => this.setSelectedIndex(index),
            onKeyDown: this.handleEnter
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
  NotecardTitle,
  NotecardSubtitle,
  NotecardViewSection,
  NotecardEditSection
};