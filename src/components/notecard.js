import React from 'react';

const swapped = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

const coerceIntoRange = (min, max, value) => Math.max(min, Math.min(max, value));

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

class NotecardStyler {
  constructor() {
    this.row_base = {
      backgroundColor: 'transparent',
      margin: 0,
      padding: 0
    };
    this.text_base = {
      backgroundColor: 'transparent',
      outline: 'transparent',
      border: 'transparent',
      width: '100%',
      margin: 0,
      padding: '.5rem',
      color: 'black',
      fontFamily: 'sans-serif'
    };
  }
  row = (extra_styles) => Object.assign({}, this.row_base, extra_styles)
  text = (extra_styles) => Object.assign({}, this.text_base, extra_styles)
}
const styler = new NotecardStyler();

const Notecard = (props) => {
  const styles = {
    border: '1px darkgray solid',
    backgroundColor: 'lightyellow',
    color: 'black',
    padding: 0,
    margin: 0
  };
  return (
    <div style={styles}>
      {props.children}
    </div>
  );
};

const NotecardTitle = (props) => {
  const styles = {
    row: styler.row({
      borderBottom: '2px red solid'
    }),
    text: styler.text({
      fontSize: '2rem',
      fontWeight: 'bold'
    })
  };
  return (
    <div style={styles.row}>
      {
        props.editable === true
          ? <input style={styles.text} placeholder={props.placeholder} value={props.title} ref={input => input && input.focus()} onChange={props.onNameChange}/>
          : <p style={styles.text}>{props.title}</p>
      }
    </div>
  )
};

const NotecardSubtitle = (props) => {
  const styles = {
    row: styler.row({
      borderBottom: '1px darkgray solid'
    }),
    text: styler.text({
      fontSize: '1rem',
      fontWeight: 'bold'
    })
  };
  return (
    <div style={styles.row}>
      {
        props.editable === true
          ? <input style={styles.text} placeholder={props.placeholder} value={props.subtitle} ref={input => input && input.focus()} onChange={props.onNameChange}/>
          : <p style={styles.text}>{props.subtitle}</p>
      }
    </div>
  )
};

const NotecardViewSection = (props) => {
  const styles = {
    row:  styler.row({ 
      borderBottom: '1px darkgray solid' 
    }),
    text: styler.text({ 
      fontSize: '1rem' 
    })
  }
  return (
  props.rows.map((row, id) => 
    <div key={id} style={styles.row}>
      <p style={styles.text}>{row}</p>
    </div>
  )
)};

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
  setSelectedIndex = (index) => this.setState({ selected_index: coerceIntoRange(0, this.state.items.length -1, index) });
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
    const styles = {
      row: styler.row({
        borderBottom: '1px darkgray solid',
        display: 'grid',
        gridTemplateColumns: '1fr 2rem 2rem 2rem',
        padding: 0
      }),
      text: styler.text({
        fontSize: '1rem'
      })
    };

    return this.state.items.map((item, index) => 
      <div key={index} style={styles.row}>
        <input
          style={styles.text}
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
  Notecard,
  NotecardTitle,
  NotecardSubtitle,
  NotecardViewSection,
  NotecardEditSection
};

