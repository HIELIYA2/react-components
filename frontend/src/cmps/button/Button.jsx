import React, { Component } from "react";
import './Button.css';

//without state use react stateless function
// interface Props {
//     isDisabled?: boolean;
//   }
//   const App: React.FC = (props: Props) => {
class Button extends Component {
    
    // state = {
    //     label: this.props.value,
    //     isDisabled: this.props.isDisabled,
    //     
    // }

    handleIncrement = () => {
        console.log('button clicked');
    }

    render() {
        console.log('value', this.props.value, this.props.isDisabled);
        const classes = `button  ${this.props.value} ${this.props.isDisabled}`
        return (
            <section>
                <div className="buttons">
                    <button onClick={this.handleIncrement} className={classes} >BUTTON</button>
                </div>
            </section>)
    }
}
export default Button;