import React,{Component} from 'react';
import './style.css'

class Button extends Component{

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.onClick();
        }
      }
    render(){
        return(
            <div onClick={this.props.onClick} className="btn" onKeyPress={this.handleKeyDown}>
                <div>{this.props.text}</div>
            </div>
        )
    }
}

export default Button;