import React from 'react';

const inputStyle = (isInvalid) => {
  const style = ['form-group__input'];
  
  if (isInvalid) {
    style.push('form-group__input--invalid');
  }

  return style.join(' ');
}

const Input = (props) => {
  return (
    <input {...props} className={inputStyle(props.invalid)}/>
  )
}

export default Input;