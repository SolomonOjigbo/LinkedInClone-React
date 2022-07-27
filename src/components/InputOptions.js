import React from 'react';
import './styles/InputOptions.css'

function InputOptions({text, color, Icon}) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <p>{text}</p>
    </div>
  );
}

export default InputOptions;