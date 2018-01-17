import React from 'react';
import Required from './required';

const Label = (props) => {
  return (
    <label className="form-group__label">
      {props.text}
      {props.required ? <Required /> : ''}
      {props.children}
    </label>
  );
}

export default Label;