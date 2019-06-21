import React, { MouseEvent } from 'react';
import './Button.css';

type props = {
  isDisabled?: boolean;
  value: string;
  onClick(e: MouseEvent<HTMLElement>): void;
};

const Button: React.FC<props> = ({ isDisabled, value, onClick }) => {
  var styleDisable: string = '';
  isDisabled ? (styleDisable = 'default') : (styleDisable = 'disabled');

  const classes: string = `button ${value} ${styleDisable}`;
  /*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
  console.log(value);
  console.log(styleDisable);
  return (
    <button onClick={onClick} className={classes}>
      {value}
    </button>
  );
};

export default Button;
