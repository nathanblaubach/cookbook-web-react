import React from 'react';
import './Tags.css';

function Tag(props) {
  return (
    <div className="form-check">
      <input type="checkbox" className="form-check-input Tags-checkboxes" id={props.id} onChange={props.onChange} />
      <label className="form-check-label" htmlFor={props.id}>{props.name}</label>
    </div>
  );
}

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags : props.tags,
      onChange : props.onChange,
    };
  }
  render() {
    return (
      <div className="Tags">
        <h1>Recipes For:</h1>
        {this.state.tags.map(tag => 
          <Tag id={tag.key} name={tag.name} onChange={() => this.state.onChange(tag.key)} />
        )}
      </div>
    );
  }
}

export default Tags;
