import React, { MouseEvent } from "react";
import './Button.css';

// without state use react stateless function
type props = {
    isDisabled?: boolean;
    value: string;
    onClick(e: MouseEvent<HTMLElement>): void;
}
// ${value} ${isDisabled}
const classes: string = `button`;

const Button: React.FC<props> = ({ isDisabled, value, onClick: handleClick }) => (
    <div className="buttons">
        <button onClick={handleClick} className={classes}>{value}</button>
    </div>
)

export default Button;