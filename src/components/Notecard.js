import React from 'react';

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

// Styling
const notecard_row_style = { 
  backgroundColor: 'lightyellow',
  color: 'black',
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
  fontWeight: 'bold',
});
const notecard_grid_row_style = Object.assign({}, notecard_row_style, {
  display: 'grid',
  gridGap: '.5rem',
  gridTemplateColumns: '1fr 1.5rem 1.5rem 1.5rem',
  gridTemplateRows: '1.5rem'
});
const notecard_input_style = {
  backgroundColor: 'transparent',
  outline: 'transparent',
  border: 'transparent',
  color: 'black',
  fontSize: '1rem',
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
  xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:"100%",
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
    React.createElement('div', { style: notecard_row_style, key: id }, row)
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
    this.handleEnterAndDelete = this.handleEnterAndDelete.bind(this);
  }
  handleEnterAndDelete(event) {
    event = event || window.event;
    if ((event.which === 8 || event.keyCode === 8) && event.target.value === ''){
      this.delete(this.state.selected_index);
    }
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
    this.setState({selected_index: index});
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
            onKeyDown: this.handleEnterAndDelete
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

