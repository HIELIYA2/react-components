import React, { MouseEvent } from 'react';
import './Button.css';

// without state use react stateless function
type props = {
    isDisabled?: boolean;
    value: string;
    onClick(e: MouseEvent<HTMLElement>): void;
};

const Button: React.FC<props> = ({ isDisabled, value, onClick: handleClick }) => {
    var styleDisable: string = '';
    if (isDisabled) {
        styleDisable = 'default';
    } else {
        styleDisable = 'disabled';
    }
    const classes: string = `button ${value} ${styleDisable}`;
    /*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
    console.log(value);
    console.log(styleDisable);
    return (
        <div className="buttons">
            <button onClick={handleClick} className={classes}>
                {value}
            </button>
        </div>
    );
};

export default Button;
