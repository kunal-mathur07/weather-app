import React,{Component} from 'react';
import './style.css'

class Button extends Component{

  
    render(){
        return(
            <div onClick={this.props.onClick} className="btn" >
                <div>{this.props.text}</div>
            </div>
        )
    }
}

export default Button;